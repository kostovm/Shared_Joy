import React, { useState } from 'react';

export default function CreateForm() {
    const [formData, setFormData] = useState({
        productName: '',
        type: 'Clothes',
        imageUrl: '',
        condition: 'new',
        quantity: 1,
        description: ''
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData); // You can replace this with your actual submit logic
    };

    return (
        <div className="main-content">

            <div className="left-container">
                {/* <!-- Your content for the left side --> */}

                <div className="form-container">
                    <form className="create-edit-form" onSubmit={submitHandler}>
                        <h2>Create</h2>
                        <label htmlFor="productName">Product Name</label>
                        <input
                            type="text"
                            id="productName"
                            name="productName"
                            placeholder="Enter product name"
                            required
                            value={formData.productName}
                            onChange={changeHandler}
                        />

                        <label htmlFor="type">Type</label>
                        <select
                            id="type"
                            name="type"
                            required
                            value={formData.type}
                            onChange={changeHandler}
                        >
                            <option value="Clothes">Clothes</option>
                            <option value="Toys">Toys</option>
                        </select>

                        <label htmlFor="imageUrl">Image URL</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="Enter image URL"
                            required
                            value={formData.imageUrl}
                            onChange={changeHandler}
                        />

                        <label htmlFor="condition">Condition</label>
                        <select
                            id="condition"
                            name="condition"
                            required
                            value={formData.condition}
                            onChange={changeHandler}
                        >
                            <option value="new">New</option>
                            <option value="used">Used</option>
                        </select>

                        <label htmlFor="quantity">Quantity</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            placeholder="Enter quantity"
                            min="1"
                            value={formData.quantity}
                            onChange={changeHandler}
                            required
                        />

                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Enter description"
                            rows="4"
                            value={formData.description}
                            onChange={changeHandler}
                            required
                        ></textarea>

                        <button type="submit">Submit</button>
                    </form>
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
    );
}