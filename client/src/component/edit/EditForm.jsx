import React, { useState } from 'react';
import * as productService from '../../services/productService';
import { useNavigate, useLocation } from 'react-router-dom';

export default function EditForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const { productInfo } = location.state || {};

    const [values, setValues] = useState({
        productName: productInfo.productName || '',
        category: productInfo.category || '',
        imageUrl: productInfo.imageUrl || '',
        city: productInfo.city || '',
        address: productInfo.address || '',
        condition: productInfo.condition || '',
        quantity: productInfo.quantity || 0,
        description: productInfo.description || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await productService.edit(productInfo._id, values);
            navigate(`/products/${productInfo._id}`);
        } catch (error) {
            console.error('Error during product update:', error);
        }
    };

    const stars = Array.from({ length: values.condition }, (_, index) => (
        <span key={index} className="star">&#9733;</span>
    ));

    return (
        <div className="main-content">
            <div className="left-container">
                <div className="form-container">
                    <form className="create-edit-form" onSubmit={handleSubmit}>
                        <h2>Edit</h2>
                        <label htmlFor="productName">Product Name</label>
                        <input
                            type="text"
                            id="productName"
                            name="productName"
                            placeholder="Enter product name"
                            required
                            value={values.productName}
                            onChange={handleChange}
                        />

                        <label htmlFor="category">Type</label>
                        <select
                            id="category"
                            name="category"
                            required
                            value={values.category}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Select</option>
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
                            value={values.imageUrl}
                            onChange={handleChange}
                        />

                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Enter city"
                            required
                            value={values.city}
                            onChange={handleChange}
                        />

                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Enter address"
                            required
                            value={values.address}
                            onChange={handleChange}
                        />

                        <label htmlFor="condition">Състояние</label>
                        <select
                            id="condition"
                            name="condition"
                            required
                            value={values.condition}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Избери</option>
                            <option value="4">Нов</option>
                            <option value="3">Използван малко</option>
                            <option value="2">Използван много</option>
                            <option value="1">Последно използване</option>
                        </select>

                        <label htmlFor="quantity">Quantity</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            placeholder="Enter quantity"
                            min="1"
                            value={values.quantity}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Enter description"
                            rows="4"
                            value={values.description}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

            <div className="right-container">
                <div className="custom-component">
                    <div className="first-part">
                        <div className="image-part">
                            <img
                                src={values.imageUrl}
                                alt="Product Image"
                                className="product-image"
                            />
                        </div>
                        <div className="text-fields">
                            <p className="bigger-text">{values.productName}</p>
                            <p className="smaller-text">{values.city}</p>
                        </div>
                        <div className="star-part">
                            {stars}
                        </div>
                    </div>

                    {/* Third Part */}
                    <div className="third-part">
                        <p>Количество: {values.quantity}</p>
                        <p>Описание на продукта: {values.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}