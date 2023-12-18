import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import * as productService from '../../services/productService'
import { useNavigate } from 'react-router-dom';
import styles from './CreateForm.module.css';

export default function CreateForm() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createSubmitHandler = async (values) => {
        try {
            setLoading(true);
            await productService.create(values);
            navigate('/products');
        } catch (error) {
            console.error('Error during product creation:', error);
            setError('Error during product creation. Please try again later.');
        } finally {
            setLoading(false);
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
        description: ''
    });

    const stars = Array.from({ length: values.condition }, (_, index) => (
        <span key={index} className={styles.star}>&#9733;</span>
    ));

    return (
        <div className={styles.mainContent}>

            <div className={styles.leftContainer}>

                <div className={styles.formContainer}>
                    <form className={styles.createEditForm} onSubmit={onSubmit}>
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
                            <option value="Дрехи">Дрехи</option>
                            <option value="Играчки">Играчки</option>
                            <option value="Храна">Храна</option>
                            <option value="Консумативи">Консумативи</option>
                            <option value="Книги">Книги</option>
                            <option value="Уреди">Уреди</option>
                            <option value="Мебели">Мебели</option>
                            <option value="Колички и столчета за кола">Колички и столчета за кола</option>
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

                        <button type="submit" disabled={loading}>
                            {loading ? 'Creating...' : 'Submit'}
                        </button>

                        {error && <div>{error}</div>}
                    </form>
                </div>

            </div>

            <div className={styles.rightContainer}>
                <h2>Вашето предложение ще изглежда приблизително така:</h2>
                <div className={styles.customComponent}>
                    <div className={styles.firstPart}>
                        <div className={styles.imagePart}>
                            <img
                                src={values.imageUrl}
                                alt="Product Image"
                                className={styles.productImage}
                            />
                        </div>
                        <div className={styles.textFields}>
                            <p className={styles.biggerText}>{values.productName}</p>
                            <p className={styles.smallerText}>{values.city}</p>
                        </div>
                        <div className={styles.starPart}>
                            <h5>Състояние</h5>
                            {stars}
                        </div>
                    </div>

                    <div className={styles.thirdPart}>
                        <p>Количество: {values.quantity}</p>
                        <p>Описание на продукта: {values.description}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}