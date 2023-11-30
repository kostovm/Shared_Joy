import React, { useState } from 'react';

export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Email:', formData.email);
        console.log('Password:', formData.password);
    };

    return (
        <div className="form-container">
            <form className="login-form" onSubmit={submitHandler}>
                <h2>Login</h2>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={changeHandler}
                    required
                />

                <p>
                    Don't have an account? <a href="#">Register</a>
                </p>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}