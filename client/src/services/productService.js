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

export const create = async (productData) => {

    const result = await request.post(baseUrl, productData)

    return result;
}

// export const addRequest = async (productInfo, userInfo) => {
//     const updatedRequestedBy = [...productInfo.requestedBy, userInfo];
  
//     const updatedInfo = { ...productInfo, requestedBy: updatedRequestedBy };

//     try {
//         const result = await request.put(`${baseUrl}/${productInfo._id}`, updatedInfo);
//         return result;
//     } catch (error) {
//         console.log(error)
//     }

//   };

// export const edit = async (gameId, gameData) => {

//     const result = await request.put(`${baseUrl}/${gameId}`, gameData)

//     return result;
// }

// export const remove = async (gameId) => request.remove(`${baseUrl}/${gameId}`);