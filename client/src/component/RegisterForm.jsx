import { useState } from "react";

export default function RegisterForm() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        rePassword: '',
        city: '',
        neighborhood: '',
        pictureUrl: '',
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
        console.log('Username:', formData.username);
        console.log('Email:', formData.email);
        console.log('Password:', formData.password);
        console.log('rePassword:', formData.rePassword);
        console.log('City:', formData.city);
        console.log('Neighborhood:', formData.neighborhood);
        console.log('Picture URL:', formData.pictureUrl);
    };

    return (
        <>
            <div className="form-container">
                <form className="registration-form" onSubmit={submitHandler}>
                    <h2>Register</h2>
                    <label htmlFor="userName">User Name</label>
                    <input
                        type="text"
                        id="userName"
                        name="username"
                        placeholder="Enter user name"
                        value={formData.username}
                        onChange={changeHandler}
                        required />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={changeHandler}
                        required />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password" name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={changeHandler}
                        required />

                    <label htmlFor="rePassword">Repeat Password</label>
                    <input
                        type="password"
                        id="rePassword"
                        name="rePassword"
                        placeholder="Enter your password again"
                        value={formData.rePassword}
                        onChange={changeHandler}
                        required />

                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Enter your city"
                        value={formData.city}
                        onChange={changeHandler}
                        required />

                    <label htmlFor="neighborhood">Neighborhood</label>
                    <input
                        type="text"
                        id="neighborhood"
                        name="neighborhood"
                        placeholder="Enter your neighborhood"
                        value={formData.neighborhood}
                        onChange={changeHandler}
                        required />

                    <label htmlFor="pictureUrl">Picture URL</label>
                    <input
                        type="url"
                        id="pictureUrl"
                        name="pictureUrl"
                        placeholder="Enter picture URL"
                        value={formData.pictureUrl}
                        onChange={changeHandler}
                        required />

                    <p>
                        Already have account? <a href="#">Login</a>
                    </p>

                    <button type="submit">Submit</button>
                </form>
            </div>

            <div className="main-content">


            </div>
        </>
    )
}