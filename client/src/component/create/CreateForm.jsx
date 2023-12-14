import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import * as productService from '../../services/productService'
import { useNavigate } from 'react-router-dom';
import Path from '../../paths';

export default function CreateForm() {
    const navigate = useNavigate();

    const createSubmitHandler = async (values) => {
        try {
           await productService.create(values);
            navigate('/products')
        } catch (error) {
            console.error('Error during product creation:', error);
        }
    };


    const { values, onChange, onSubmit } = useForm(createSubmitHandler, {
        productName: '',
        category: '',
        imageUrl: '',
        city: '',
        address: '',
        condition: '',
        quantity: 1,
        description: '',
        requestedBy: []
    });

    const stars = Array.from({ length: values.condition }, (_, index) => (
        <span key={index} className="star">&#9733;</span>
    ));

    return (
        <div className="main-content">

            <div className="left-container">
                {/* <!-- Your content for the left side --> */}

                <div className="form-container">
                    <form className="create-edit-form" onSubmit={onSubmit}>
                        <h2>Create</h2>
                        <label htmlFor="productName">Product Name</label>
                        <input
                            type="text"
                            id="productName"
                            name="productName"
                            placeholder="Enter product name"
                            required
                            value={values.productName}
                            onChange={onChange}
                        />

                        <label htmlFor="category">Type</label>
                        <select
                            id="category"
                            name="category"
                            required
                            value={values.category}
                            onChange={onChange}
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
                            onChange={onChange}
                        />

                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Enter city"
                            required
                            value={values.city}
                            onChange={onChange}
                        />

                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Enter address"
                            required
                            value={values.address}
                            onChange={onChange}
                        />

                        <label htmlFor="condition">Състояние</label>
                        <select
                            id="condition"
                            name="condition"
                            required
                            value={values.condition}
                            onChange={onChange}
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
                            onChange={onChange}
                            required
                        />

                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Enter description"
                            rows="4"
                            value={values.description}
                            onChange={onChange}
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
                            <h5>Състояние</h5>
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