import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/products'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    console.log(result)

    return Object.values(result)
}