import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import * as productService from '../../services/productService'
import { useNavigate } from 'react-router-dom';
import styles from './CreateForm.module.css';
import PreviewComponent from '../preview-component/PreviewComponent';

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

    // const stars = Array.from({ length: values.condition }, (_, index) => (
    //     <span key={index} className={styles.star}>&#9733;</span>
    // ));

    return (
        <div className={styles.mainContent}>

            <div className={styles.leftContainer}>

                <div className={styles.formContainer}>
                    <form className={styles.createEditForm} onSubmit={onSubmit}>
                        <h2>Create</h2>
                        <label htmlFor="productName">Име на продукта</label>
                        <input
                            type="text"
                            id="productName"
                            name="productName"
                            placeholder="Въведете име на продукта"
                            required
                            value={values.productName}
                            onChange={onChange}
                        />

                        <label htmlFor="category">Категория</label>
                        <select
                            id="category"
                            name="category"
                            required
                            value={values.category}
                            onChange={onChange}
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
                            placeholder="Въведете URL на изображението"
                            required
                            value={values.imageUrl}
                            onChange={onChange}
                        />

                        <label htmlFor="city">Град</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Въведете град"
                            required
                            value={values.city}
                            onChange={onChange}
                        />

                        <label htmlFor="address">Квартал</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Въведете квартал"
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
                            <option value="" disabled>Изберете</option>
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
                            placeholder="Въведете количество"
                            min="1"
                            value={values.quantity}
                            onChange={onChange}
                            required
                        />

                        <label htmlFor="description">Описание на продукта</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Въведете описание"
                            rows="4"
                            value={values.description}
                            onChange={onChange}
                            required
                        ></textarea>

                        <button type="submit" disabled={loading}>
                            {loading ? 'Създаване...' : 'Изпрати'}
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