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
                    <h2>Login</h2>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        required
                    />

                    <label htmlFor="password">Password</label>
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
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>

                    <button type="submit">Submit</button>
                </form>
            </div>

            <div className={styles.mainContent}>


            </div>
        </>

    );
}