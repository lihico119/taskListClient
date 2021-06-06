import axios from 'axios';

const todosApi = axios.create({
    baseURL: 'http://localhost:4000/Tasks'
});

export default todosApi;