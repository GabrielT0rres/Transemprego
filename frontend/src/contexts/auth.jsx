import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();


    useEffect(() => {
        if (localStorage.getItem("user_token")) {
            login();
        }
    }, [])

    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };

    const login = () => {
        const userToken = localStorage.getItem("user_token");
        setUser(userToken);
    }

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signout, login }}
        >
            {children}
        </AuthContext.Provider>
    );
};