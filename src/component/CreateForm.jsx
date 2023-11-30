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
    );
}