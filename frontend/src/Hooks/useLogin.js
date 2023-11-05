import { useMutation } from "react-query";
import { redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../constants/api";
import useAuth from "./useAuth";

async function loginPost(data) {
    var bodyFormData = new FormData();
    bodyFormData.append('grant_type', 'password');
    bodyFormData.append('username', data.username);
    bodyFormData.append('password', data.password);
    return await axios({
        url: `${api.URL_API}/oauth2/token`,
        method: 'post',
        data: bodyFormData,
        auth: {
            username: api.USERNAME_API,
            password: api.PASSWORD_API
        },
        headers: { "Content-Type": "multipart/form-data" }
    })
}


const useLogin = () => {        
    const navigate = useNavigate();    
    const { login, setInfoUser } = useAuth();
    return useMutation({
        mutationKey: 'LOGIN-KEY',
        mutationFn: (data) => loginPost(data),
        onSuccess: async (data) => {  
            localStorage.setItem("user_token", JSON.stringify(data.data));            
            await setInfoUser();
            
            login();         
            return navigate("/");
        }
    });
};

export default useLogin