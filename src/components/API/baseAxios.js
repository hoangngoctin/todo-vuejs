import axios from "axios";

const instance = axios.create({
    baseURL: `http://localhost:3000/posts`})

export default instance