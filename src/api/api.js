
import axios from 'axios';
const api = axios.create({
    baseURL: 'https://cryptoverse-backend-3jl3.onrender.com/crypto'
});

export default api;
