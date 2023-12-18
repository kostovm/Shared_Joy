import { useContext, useState } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import styles from './RegisterForm.module.css';
import { Link } from "react-router-dom";

export default function RegisterForm() {

    const { registerSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        rePassword: '',
        imageUrl: '',
    })

    return (
        <>
            <div className={styles.formContainer}>
                <form className={styles.registrationForm} onSubmit={onSubmit}>
                    <h2>РЕГИСТРАЦИЯ</h2>
                    <label htmlFor="username">Потребителско име</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Въведете потребителско име"
                        value={values.username}
                        onChange={onChange}
                        required />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Въведете email"
                        value={values.email}
                        onChange={onChange}
                        required />

                    <label htmlFor="phoneNumber">Телефон</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Въведете телефон"
                        value={values.phoneNumber}
                        onChange={onChange}
                        required />

                    <label htmlFor="password">Парола</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Въведете парола"
                        value={values.password}
                        onChange={onChange}
                        required />

                    <label htmlFor="rePassword">Повторете паролата</label>
                    <input
                        type="password"
                        id="rePassword"
                        name="rePassword"
                        placeholder="Въведете паролата си отново"
                        value={values.rePassword}
                        onChange={onChange}
                        required />

                    <label htmlFor="imageUrl">URL на профилното изображение</label>
                    <input
                        type="url"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Въведете URL"
                        value={values.imageUrl}
                        onChange={onChange}
                        required />

                    <p>
                        Вече имате регистрация? <Link to="/login">Вход</Link>
                    </p>

                    <button type="submit">Изпрати</button>
                </form>
            </div>

            <div className={styles.mainContent}>

            </div>
        </>
    )
}