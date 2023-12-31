import React, { useState } from 'react';
import * as productService from '../../services/productService';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './EditForm.module.css';
import PreviewComponent from '../preview-component/PreviewComponent';

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

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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
            setLoading(true);
            await productService.edit(productInfo._id, values);
            navigate(`/products/${productInfo._id}`);
        } catch (error) {
            console.error('Error during product update:', error);
            setError('Error during product update. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const stars = Array.from({ length: values.condition }, (_, index) => (
        <span key={index} className={styles.star}>&#9733;</span>
    ));

    return (
        <div className={styles.mainContent}>
            <div className={styles.leftContainer}>
                <div className={styles.formContainer}>
                    <form className={styles.createEditForm} onSubmit={handleSubmit}>
                        <h2>Edit</h2>
                        <label htmlFor="productName">Име на продукта</label>
                        <input
                            type="text"
                            id="productName"
                            name="productName"
                            placeholder="Enter product name"
                            required
                            value={values.productName}
                            onChange={handleChange}
                        />

                        <label htmlFor="category">Категория</label>
                        <select
                            id="category"
                            name="category"
                            required
                            value={values.category}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Изберете</option>
                            <option value="Дрехи">Дрехи</option>
                            <option value="Играчки">Играчки</option>
                            <option value="Храна">Храна</option>
                            <option value="Консумативи">Консумативи</option>
                            <option value="Книги">Книги</option>
                            <option value="Уреди">Уреди</option>
                            <option value="Мебели">Мебели</option>
                            <option value="Колички и столчета за кола">Колички и столчета за кола</option>
                        </select>

                        <label htmlFor="imageUrl">URL на изображението</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="Enter image URL"
                            required
                            value={values.imageUrl}
                            onChange={handleChange}
                        />

                        <label htmlFor="city">Град</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Enter city"
                            required
                            value={values.city}
                            onChange={handleChange}
                        />

                        <label htmlFor="address">Квартал</label>
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

                        <label htmlFor="quantity">Количество</label>
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

                        <label htmlFor="description">Описание на продукта</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Enter description"
                            rows="4"
                            value={values.description}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <button type="submit" disabled={loading}>
                            {loading ? 'Обновяване...' : 'Изпращане'}
                        </button>

                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>

            <div className={styles.rightContainer}>
                <h2>Вашето предложение ще изглежда приблизително така:</h2>
            <PreviewComponent values={values} />
            </div>
        </div>
    );
}