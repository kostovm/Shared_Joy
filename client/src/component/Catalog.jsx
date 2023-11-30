export default function Catalog() {
    return (
        <div className="main-content">
            <div className="left-container">
                {/* <!-- Your content for the left side --> */}

                <div className="catalog">

                    <div className="select-container">
                        <select className="category-select" defaultValue="defaultCategory">
                            <option value="defaultCategory" disabled>Choose a category</option>
                            <option value="clothes">Clothes</option>
                            <option value="toys">Toys</option>
                        </select>

                        <select className="city-select" defaultValue="defaultCity">
                            <option value="defaultCity" disabled>Choose City</option>
                            <option value="sofia">Sofia</option>
                            <option value="burgas">Burgas</option>
                        </select>

                        {/* Show Button */}
                        <button className="filter-button">Show</button>

                        {/* Clear Filters Button */}
                        <button className="filter-button">Clear filters</button>
                    </div>

                    <div className="product">
                        <p className="city">Sofia</p>
                        <div className="product-details">
                            <img
                                src="https://shop.lillydrogerie.bg/media/catalog/product/cache/1d61232755c257eb23e203a98c67893b/1/1/117402-8001090759870_1.jpeg"
                                alt="Product"
                                className="product-image"
                            />
                            <p className="product-text">Product Description</p>
                            <div className="star-container">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <p className="city">Sofia</p>
                        <div className="product-details">
                            <img
                                src="https://shop.lillydrogerie.bg/media/catalog/product/cache/1d61232755c257eb23e203a98c67893b/1/1/117402-8001090759870_1.jpeg"
                                alt="Product"
                                className="product-image"
                            />
                            <p className="product-text">Product Description</p>
                            <div className="star-container">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>
                        </div>
                    </div>

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