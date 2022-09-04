import axios from 'axios';

const base_url = "https://jsonplaceholder.typicode.com";

export default axios.create({
    baseURL: base_url
});
