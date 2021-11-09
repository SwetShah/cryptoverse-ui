
import axios from 'axios';
const api = axios.create({
    baseURL: 'https://crypto-verse-swet.herokuapp.com/crypto'
});

export default api;