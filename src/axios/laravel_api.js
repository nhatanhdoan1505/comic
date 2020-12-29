import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://comic-laravel-api.herokuapp.com/api/',
})

export default instance;