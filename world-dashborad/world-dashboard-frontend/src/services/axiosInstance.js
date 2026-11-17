import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5011/dashboard/',
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 10000
});

export default axiosInstance;