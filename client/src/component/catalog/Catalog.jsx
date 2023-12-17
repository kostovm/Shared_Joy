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
    const params = useParams();
    const productId = params["*"];

    const [products, setProducts] = useState([]);
    const [stateChanges, setStateChanges] = useState(0);
    const [loading, setLoading] = useState(true);

    const [filters, setFilters] = useState({
        category: "",
        city: "",
        search: searchTerm,
        showOnlyUserOffers: false
    });

    const handleProductChange = (productId, action) => {
        if (action === "delete") {
            setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
        }
        if(action === 'update'){
            let changes = stateChanges;
            changes++
            setStateChanges(changes)
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await productService.getAll();
                setProducts(result);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

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

    if (loading) {
        return <div>Loading...</div>;
    }

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
                            <option value="Дрехи">Дрехи</option>
                            <option value="Играчки">Играчки</option>
                            <option value="Храна">Храна</option>
                            <option value="Консумативи">Консумативи</option>
                            <option value="Книги">Книги</option>
                            <option value="Уреди">Уреди</option>
                            <option value="Мебели">Мебели</option>
                            <option value="Колички и столчета за кола">Колички и столчета за кола</option>
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
                        <CatalogItem
                            key={`${product._id}`}
                            {...product}
                            productId={productId}
                            stateChanges={stateChanges}
                        />
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