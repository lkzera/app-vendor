import React, { useState, createContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {api, CreateSession} from "../services/api";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const login = async (email, password) => {

        const response = await CreateSession(email,password);
        console.log("login", response.data);
       
        const apiUser = {
            login: email,
            senha: password
        }
       
        if (password === 'senha') {
            setUser({ id: '123', email });
            navigate("/");
        }
    };

    const logout = () => {
        console.log("login");
        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}