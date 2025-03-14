import * as request from '../lib/request'

const baseUrl = 'http://localhost:3030/users'

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password
    });

    console.log(result);

    return result;
};

export const register = async (username, email, phoneNumber, password, imageUrl) => {

    const result = await request.post(`${baseUrl}/register`, {
        username,
        email,
        phoneNumber,
        password,
        imageUrl,
    });

    return result;
};

export const logout = () => request.get(`${baseUrl}/logout`);