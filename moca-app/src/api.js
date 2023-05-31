import axios from "axios";

const api = axios.create({
    // baseURL: "http://localhost:8080/api/"
     baseURL: "https://moca-rest-service.azurewebsites.net/api/"
})

export default api;
