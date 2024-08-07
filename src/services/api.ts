import axios from "axios";

export const api = axios.create({
    baseURL: "https://interview.t-alpha.com.br",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 5000
})