import axios from 'axios';

export const api = axios.create({
    baseURL: "http://localhost:5000",
});

export const CreateSession = async(email,password) => {
    return api.post("/V1/Login",{login: "lucas",senha: "senha"});
};