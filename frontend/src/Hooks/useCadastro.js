import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import api from "../constants/api";



const useCadastro = () => {

    async function cadastroPost(data) {
        return await axios.post(`${api.URL_API}/usuario/`, data)
    }

    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationKey: 'CADASTRO-MUTATION-KEY',
        mutationFn: (data) => cadastroPost(data),
        onSuccess: () => {
            queryClient.invalidateQueries('CADASTRO-KEY')
        }
    });


    // return {getCadastro, mutation};
};

function useCadastroPerfil() {
    return  useQuery({
        queryKey: 'CADASTRO-KEY',
        retry: 2,
        queryFn:  () => {
            return axios.get(`${api.URL_API}/usuario/perfil`, {
                headers: {
                    "Authorization": `Bearer ${JSON.parse(localStorage.getItem("user_token")).access_token}`
                }
            })
        }
    });
}
export { useCadastroPerfil };

//useCadastro