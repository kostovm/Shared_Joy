import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/products'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result)
}

export const getOne = async (productId) => {
    const result = await request.get(`${baseUrl}/${productId}`);

    return result;
}