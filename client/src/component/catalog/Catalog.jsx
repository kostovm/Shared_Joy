import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import * as productService from '../../services/productService'
import CatalogItem from "./catalog-item/CatalogItem";

export default function Catalog() {

    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.searchTerm);


    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        category: '',
        city: '',
        search: searchTerm
    });

    useEffect(() => {
        productService.getAll()
            .then(result => setProducts(result));
    }, []);

    useEffect(() => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            search: searchTerm
        }));
    }, [searchTerm]);

    const uniqueCities = [...new Set(products.map((product) => product.city))].sort();

    const filteredProducts = products.filter((product) => {
        return (
            (filters.category === '' || product.category === filters.category) &&
            (filters.city === '' || product.city === filters.city) &&
            (filters.search === '' || Object.values(product).some(value =>
                value && typeof value === 'string' && value.toLowerCase().includes(filters.search.toLowerCase())
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
                        <button className="filter-button" onClick={() => setFilters({ category: '', city: '', search: '' })}>
                            Clear filters
                        </button>

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

                <div className="custom-component">
                    {/* First Part */}
                    <div className="first-part">
                        <div className="image-part">
                            <img
                                src="https://shop.lillydrogerie.bg/media/catalog/product/cache/2761e3db3ed07158c8e69f4f03a996b0/1/1/117402-8001090759870_1.jpeg"
                                alt="Product Image"
                                className="product-image"
                            />
                        </div>
                        <div className="star-part">
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                        </div>
                    </div>

                    {/* Second Part */}
                    <div className="second-part">
                        <div className="text-fields">
                            <p className="bigger-text">Pampers ampers dampers hahahahahahah</p>
                            <p className="smaller-text">Sofia</p>
                        </div>
                    </div>

                    {/* Third Part */}
                    <div className="third-part">
                        <p>Description: Some text</p>
                        <p>Quantity: Some text</p>
                        <p>More information: Some longer longer longer longer text</p>
                        <div className="requests">
                            <p>
                                <a href="#">UserName</a>
                            </p>
                            <p>Phone Number: 08995647474</p>
                            <p>Email: mi@gmail.com</p>
                        </div>
                        <div className="requests">
                            <p>
                                <a href="#">UserName2</a>
                            </p>
                            <p>Phone Number: 089464646</p>
                            <p>Email: msdfsdfi@gmail.com</p>
                        </div>
                        <div className="buttons-container">
                            <button>Edit</button>
                            <button>Remove</button>
                            <button>Request</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}