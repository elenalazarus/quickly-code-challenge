

import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const baseAxios = axios.create({
    baseURL: `${API_BASE_URL}`,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getUserRequest = () => {
    let token = localStorage.getItem("jwtToken");

    if (token)
        token = JSON.parse(token);

    return baseAxios.get("/auth/user", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const login = (data) =>
    baseAxios.post("/auth/login", data);

export const register = (data) => 
    baseAxios.post("/auth/signup", data);