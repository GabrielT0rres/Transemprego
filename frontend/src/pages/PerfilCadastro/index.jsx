import Navbar from '../../components/Navbar'
import Input from '../../components/Input'
import CardDragDrop from '../../components/CardDragDrop';
import TextArea from '../../components/TextArea';
import ButtonFlat from '../../components/ButtonFlat';
import style from './style.module.css'
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import api from '../../constants/api';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';


const PerfilCadastro = () => {
    const [dados, setDados] = useState({});
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const auth = useAuth();
    var query;

    if (auth.signed) {
        query = useQuery({
            queryKey: 'CADASTRO-KEY',
            retry: 2,
            onSuccess: (data) => {
                //const { ['vagas']: remove, ...rest } = data.data;
                const rest  = data.data;
                setDados(rest)
                localStorage.setItem("user_data", JSON.stringify(rest));
            },
            queryFn: async () => {
                return await axios.get(`${api.URL_API}/usuario/perfil`, {
                    headers: {
                        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("user_token")).access_token}`
                    }
                })
            }
        });
    }    

    async function mutationPut(data) {
        return await axios({
            url: `${api.URL_API}/usuario`,
            method: 'PUT',
            data: data,
            headers: {
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("user_token")).access_token}`
            }
        })
    }

    async function mutationPost(data) {
        data = { ...data, ...auth.user }
        
        return await axios({
            url: `${api.URL_API}/usuario`,
            method: 'POST',
            data: data               
        })
    }
    const mutation = useMutation({
        mutationKey: 'CADASTRO-MUTATION-KEY',
        onSuccess: async () => {
            queryClient.invalidateQueries('CADASTRO-KEY')
            if (!auth.signed) {
                navigate('/login')
            }
        },
        mutationFn: auth.signed ?
            (dados) => mutationPut(dados) :
            (dados) => mutationPost(dados),
    });


    if (auth.signed && query.isLoading) {
        return (
            <div>
                {/* <h1>{auth.user}</h1> */}
                <h2>{auth.signed}</h2>
            </div>
            
        )
    }

    function onSubmit(e) {        
        e.preventDefault();
        mutation.mutate(dados);
    }

    return (
        <div className={`d-flex flex-column `}>
            <Navbar />
            <div className={` ${style.card} d-flex flex-column  justify-content-center gap-3`} >
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className={`d-flex flex-wrap gap-3`}>
                        <div className={`d-flex flex-column flex-grow-1 gap-3`}>

                            <Input label='Nome Completo'
                                id='input-nome-completo'
                                placeholder='Digite aqui seu nome completo.'
                                type='text'
                                value={dados?.nomeCompleto}
                                onChange={(e) => setDados({
                                    ...dados,
                                    nomeCompleto: e.target.value
                                })}
                            />
                            <Input label='Nome Social'
                                id='input-nome-social'
                                placeholder='Digite aqui seu nome social.'
                                type='text'
                                value={dados?.nomeSocial}
                                onChange={(e) => setDados({
                                    ...dados,
                                    nomeSocial: e.target.value
                                })}
                            />

                            <Input label='Endereço'
                                id='Input-endereco'
                                placeholder='Digite aqui seu endereço.'
                                type='text'
                                value={dados?.endereco}
                                onChange={
                                    (e) => setDados({
                                        ...dados,
                                        endereco: e.target.value
                                    })
                                } />
                        </div>
                        <div className={`d-flex flex-column`}>
                            <CardDragDrop />
                        </div>
                    </div>
                    <Input
                        label='Outra coisa'
                        id='Input-outra-coisa'
                        placeholder='Digite aqui outra coisa.'
                        type='text' />
                    <TextArea
                        id='input-objetivo'
                        placeholder='Digite aqui seu objetivo.'
                        label='Objetivo profissional'
                        value={dados?.objetivoProfissional}
                        onChange={(e) => setDados({
                            ...dados,
                            objetivoProfissional: e.target.value
                        })} />
                    <ButtonFlat nome="Salvar Informações" />
                </form>
            </div>
        </div >


    )
}




export default PerfilCadastro;