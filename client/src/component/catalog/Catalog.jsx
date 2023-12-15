import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as productService from "../../services/productService";
import CatalogItem from "./catalog-item/CatalogItem";
import { setSearchTerm } from "../../redux/actions";
import DetailsComponent from "./details-component/DetailsComponent";
import { useParams } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export default function Catalog() {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.searchTerm);
    const { userId } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [productChange, setProductChange] = useState(null);

    const [filters, setFilters] = useState({
        category: "",
        city: "",
        search: searchTerm,
        showOnlyUserOffers: false
    });

    const params = useParams();
    const productId = params["*"];

    const handleProductChange = (productId) => {
        setProductChange(productId);
    };

    useEffect(() => {
        productService.getAll().then((result) => setProducts(result));
        
        if (productChange) {
            setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productChange));
            setProductChange(null);
          }
        }, [productChange]);

    useEffect(() => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            search: searchTerm,
        }));
    }, [searchTerm]);

    useEffect(() => {
        return () => {
            dispatch(setSearchTerm(""));
        };
    }, [dispatch]);

    const uniqueCities = [...new Set(products.map((product) => product.city))].sort();

    const filteredProducts = products.filter((product) => {
        const userFilter = !filters.showOnlyUserOffers || product._ownerId === userId;
        const categoryFilter = filters.category === "" || product.category === filters.category;
        const cityFilter = filters.city === "" || product.city === filters.city;
        const searchFilter =
            filters.search === "" ||
            Object.values(product).some(
                (value) =>
                    value &&
                    typeof value === "string" &&
                    value.toLowerCase().includes(filters.search.toLowerCase())
            );

        return userFilter && categoryFilter && cityFilter && searchFilter;
    });

    return (
        <div className="main-content">
            <div className="left-container">
                <div className="catalog">
                    <div className="select-container">

                        <select className="category-select" id="category"
                            name="category"
                            value={filters.category}
                            onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
                            <option value="">All Categories</option>
                            <option value="Clothes">Clothes</option>
                            <option value="Toys">Toys</option>
                        </select>

                        <select className="city-select" id="city"
                            name="city"
                            value={filters.city}
                            onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                        >
                            <option value="">All Cities</option>
                            {uniqueCities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                        {userId && (
                            <label>
                                Show only your offers
                                <input
                                    type="checkbox"
                                    checked={filters.showOnlyUserOffers}
                                    onChange={() =>
                                        setFilters((prevFilters) => ({
                                            ...prevFilters,
                                            showOnlyUserOffers: !prevFilters.showOnlyUserOffers,
                                        }))
                                    }
                                />
                            </label>
                        )}

                        {Object.values(filters).some((value) => (value !== "" && value !== false)) && (
                            <button
                                className="filter-button"
                                onClick={() => setFilters({ category: "", city: "", search: "", showOnlyUserOffers: false })}
                            >
                                Clear filters
                            </button>
                        )}

                        {filters.search !== "" && <h1>Search results for: {searchTerm}</h1>}
                    </div>

                    {filteredProducts.map((product) => (
                        <CatalogItem key={product._id} {...product} productId={productId} />
                    ))}
                </div>
            </div>

            <div className="right-container">
                {productId === "" && (
                    <div className="right-component">
                        <img src="/images/babyThings.jpg" alt="Description" className="right-image" />
                    </div>
                )}

                <DetailsComponent productId={productId} onChange={handleProductChange} />
            </div>
        </div>
    );
}