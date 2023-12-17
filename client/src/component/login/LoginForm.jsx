import React, { useContext, useState } from 'react';
import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authContext';

export default function LoginForm() {

    const { loginSubmitHandler, error } = useContext(AuthContext);

    const { values, onSubmit, onChange } = useForm(loginSubmitHandler, {
        email: '',
        password: '',
    })

    return (
        <>
            <div className="form-container">
                <form className="login-form" onSubmit={onSubmit}>
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

                    {error && <div className="error-message">{error}</div>}

                    <p>
                        Don't have an account? <a href="#">Register</a>
                    </p>

                    <button type="submit">Submit</button>
                </form>
            </div>

            <div className="main-content">


            </div>
        </>

    );
}