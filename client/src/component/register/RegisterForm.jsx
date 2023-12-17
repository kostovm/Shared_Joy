import { useContext, useState } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

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
            <div className="form-container">
                <form className="registration-form" onSubmit={onSubmit}>
                    <h2>Register</h2>
                    <label htmlFor="userName">User Name</label>
                    <input
                        type="text"
                        id="userName"
                        name="username"
                        placeholder="Enter user name"
                        value={values.username}
                        onChange={onChange}
                        required />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        value={values.email}
                        onChange={onChange}
                        required />

                    <label htmlFor="phoneNumber">Phone number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Enter phoneNumber"
                        value={values.phoneNumber}
                        onChange={onChange}
                        required />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password" 
                        name="password"
                        placeholder="Enter password"
                        value={values.password}
                        onChange={onChange}
                        required />

                    <label htmlFor="rePassword">Repeat Password</label>
                    <input
                        type="password"
                        id="rePassword"
                        name="rePassword"
                        placeholder="Enter your password again"
                        value={values.rePassword}
                        onChange={onChange}
                        required />

                    <label htmlFor="pictureUrl">Picture URL</label>
                    <input
                        type="url"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Enter picture URL"
                        value={values.imageUrl}
                        onChange={onChange}
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