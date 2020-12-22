import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://crawl-api-comic.herokuapp.com/',
})

export default instance;