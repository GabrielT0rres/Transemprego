import { createContext, useEffect, useState } from "react";
import axios from "axios";
import api from "../constants/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});


    useEffect(() => {
        if (localStorage.getItem("user_token")) {
            login();
        }
    }, [])

    const signout = () => {
        setUser({});
        localStorage.removeItem("user_token");
        localStorage.removeItem("user_data");
    };

    const setInfoUser = async () => {
        const userData = await axios.get(`${api.URL_API}/usuario/perfil`, {
            headers: {
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("user_token")).access_token}`
            }
        })        
        localStorage.setItem("user_data", JSON.stringify(userData.data));
        setUser({ user, ...userData.data });
    }

    const register = (data) => {
        setUser(data);
    }

    const login = () => {
        const userToken = localStorage.getItem("user_token");
        const userInfo = localStorage.getItem("user_data");

        let merged = {
            ...JSON.parse(userInfo),
            "token": {
                ...JSON.parse(userToken)
            }
        };
        
        setUser(merged);
    }

    function signed() {
        return JSON.parse(localStorage.getItem('user_data')) != null
    }



    return (
        <AuthContext.Provider
            value={{ user, signed: signed(), signout, login, setInfoUser, register }}
        >
            {children}
        </AuthContext.Provider>
    );
};