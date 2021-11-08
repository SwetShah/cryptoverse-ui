
import axios from 'axios';
const api = axios.create({
    // baseURL: 'https://jsonplaceholder.typicode.com/todos/1',
    baseURL: 'http://localhost:8080/crypto'
});

export default api;