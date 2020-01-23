import axios from "axios"

// For debugging with xdebug:
// const options = {
//     headers: {'Cookie':'XDEBUG_SESSION=XDEBUG_ECLIPSE'}
// };
const options = {};

//export const API_URL = 'https://eventbinge.herokuapp.com';
// export const API_URL = 'https://fgh.ngrok.io';
export const API_URL = 'https://www.eventssmarter.com';

export const get = (endpoint) => {
    return axios.get(`${API_URL}${endpoint}`);
};

export const post = (endpoint, data) => {
    return axios.post(`${API_URL}${endpoint}`, data, options);
};