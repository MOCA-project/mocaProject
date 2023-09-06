import axios from "axios";

const api = axios.create({
    // baseURL: "http://localhost:8080/api/"
    baseURL: "http://54.225.15.170:3000/api/"
})

export default api;
