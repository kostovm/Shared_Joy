import React, { useContext, useState } from 'react';
import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authContext';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';

export default function LoginForm() {

    const { loginSubmitHandler, error } = useContext(AuthContext);

    const { values, onSubmit, onChange } = useForm(loginSubmitHandler, {
        email: '',
        password: '',
    })

    return (
        <>
            <div className={styles.formContainer}>
                <form className={styles.loginForm} onSubmit={onSubmit}>
                    <h2>ВХОД</h2>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        required
                    />

                    <label htmlFor="password">Парола</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={onChange}
                        required
                    />

                    {error && <div className={styles.errorMessage}>{error}</div>}

                    <p>
                        Все още нямате регистрация? <Link to="/register">Регистрация</Link>
                    </p>

                    <button type="submit">Изпрати</button>
                </form>
            </div>

            <div className={styles.mainContent}>


            </div>
        </>

    );
}