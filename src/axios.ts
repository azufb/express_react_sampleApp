import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'https://expresssampleapi.onrender.com',
    headers: {
        'Content-Type': 'application/json'
    }
});