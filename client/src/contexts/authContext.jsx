import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from '../services/authService'
import Path from "../paths";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        localStorage.setItem('auth', JSON.stringify(result));
        navigate(-1);
    };

    const registerSubmitHandler = async (values) => {
        if(values.password !== values.rePassword){
            throw new Error('Passwords mismatch!')
        }
        
        const result = await authService.register(
          values.username, 
          values.email,
          values.phoneNumber, 
          values.password,
          values.imageUrl
          );
    
        setAuth(result)
        localStorage.setItem('accessToken', result.accessToken)
        localStorage.setItem('auth', JSON.stringify(result));
        navigate(Path.Home);
      };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
        localStorage.removeItem('auth');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        imageUrl: auth.imageUrl,
        phoneNumber: auth.phoneNumber,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;