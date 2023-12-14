import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/requests'

export const getRequests = async (productId) => {
    const requests = await request.get(`${baseUrl}/${productId}`);

    const result = Object.values(requests).reduce((acc, singleRequest) => {
        acc.push(singleRequest);
        return acc;
      }, []);

    return result;
}

export const addRequest = async (productId, requesterInfo) => {
    const newRequest = {
        "email": requesterInfo.email,
        "username": requesterInfo.username,
        "phoneNumber": requesterInfo.phoneNumber,
        "imageUrl": requesterInfo.imageUrl,
        "requesterId": requesterInfo.requesterId
    }

    const result = await request.post(`${baseUrl}/${productId}`, newRequest);

    return result;
}

export const removeRequest = async (productId, userId) => {
    const requests = await request.get(`${baseUrl}/${productId}`);

        const modifiedObject = { ...requests };
      
        Object.keys(modifiedObject).forEach(key => {
          if (modifiedObject[key].requesterId === userId) {
            delete modifiedObject[key];
          }
        });
      
        const result = await request.put(`${baseUrl}/${productId}`, modifiedObject);

        return result;
};