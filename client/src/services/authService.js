import * as request from '../lib/request'

const baseUrl = 'http://localhost:3030/users'

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password
    });

    return result;
};

export const register = async (username, email, password, city, neighborhood, pictureUrl) => request.post(`${baseUrl}/register`, {
    username,
    email,
    password,
    city,
    neighborhood,
    pictureUrl
});

export const logout = () => request.get(`${baseUrl}/logout`);