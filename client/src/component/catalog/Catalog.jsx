import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as productService from "../../services/productService";
import CatalogItem from "./catalog-item/CatalogItem";
import { setSearchTerm } from "../../redux/actions";
import DetailsComponent from "./details-component/DetailsComponent";
import { useParams  } from "react-router-dom";

export default function Catalog() {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.searchTerm);
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        category: "",
        city: "",
        search: searchTerm,
    });

    const params = useParams();
    const productId = params['*'];

    useEffect(() => {
        productService.getAll().then((result) => setProducts(result));
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

    const uniqueCities = [...new Set(products.map((product) => product.city))].sort();

    const filteredProducts = products.filter((product) => {
        return (
            (filters.category === "" || product.category === filters.category) &&
            (filters.city === "" || product.city === filters.city) &&
            (filters.search === "" ||
                Object.values(product).some(
                    (value) =>
                        value &&
                        typeof value === "string" &&
                        value.toLowerCase().includes(filters.search.toLowerCase())
                ))
        );
    });

    return (
        <div className="main-content">
            <div className="left-container">
                {/* <!-- Your content for the left side --> */}

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

                        {/* Clear Filters Button */}
                        {Object.values(filters).some(value => value !== '') && (
                            <button
                                className="filter-button"
                                onClick={() => setFilters({ category: '', city: '', search: '' })}
                                disabled={Object.values(filters).every(value => value === '')}
                            >
                                Clear filters
                            </button>
                        )}

                        {filters.search !== '' && (
                            <h1>Search results for: {searchTerm}</h1>
                        )}

                    </div>

                    {filteredProducts.map(product => (
                        <CatalogItem key={product._id} {...product} />
                    ))}

                </div>

            </div>

            <div className="right-container">
                {/* <!-- Your content for the right side --> */}

                {productId === '' || productId === '*' && (
                    <div className="right-component">
                        <img src="/images/babyThings.jpg" alt="Description" className="right-image" />
                    </div>
                )}

                <DetailsComponent productId={productId} />

            </div>
        </div>
    )
}