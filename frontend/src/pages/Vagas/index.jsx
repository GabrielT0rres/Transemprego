import Navbar from '../../components/Navbar'
import Input from '../../components/Input'
import TextArea from '../../components/TextArea';
import ButtonFlat from '../../components/ButtonFlat';
import style from './style.module.css'
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import api from '../../constants/api';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Vagas = () => {

    const [dados, setDados] = useState({});
    const queryClient = useQueryClient();
    const auth = useAuth();
    var query;

    if (auth.signed) {
        query = useQuery({
            queryKey: 'CADASTRO-KEY',
            retry: 2,
            queryFn: async () => {
                return await axios.get(`${api.URL_API}/vagas/1`, {
                    headers: {
                        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("user_token")).access_token}`
                    }
                })
            }
        });
    }

    async function mutationPut(data) {
        return await axios({
            url: `${api.URL_API}/vagas`,
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
            url: `${api.URL_API}/vagas`,
            method: 'POST',
            data: data
        })
    }
    const mutation = useMutation({
        mutationKey: 'CADASTRO-MUTATION-KEY',
        onSuccess: async () => {
            queryClient.invalidateQueries('CADASTRO-KEY')
        },
        mutationFn: auth.signed ?
            (dados) => mutationPut(dados) :
            (dados) => mutationPost(dados),
    });


    if (auth.signed && query.isLoading) {
        return (
            <div>
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
            <form onSubmit={(e) => onSubmit(e)}>
                <div className={` ${style.card} d-flex flex-column  justify-content-center gap-3`} >
                    <div className={`d-flex flex-wrap gap-3`}>
                        <div className={`d-flex flex-column flex-grow-1 gap-3`}>
                            <Input label='Cargo/Ocupação:'
                                id='input-cargo-ocupaçao'
                                placeholder='Informe o Cargo/Ocupação.'
                                type='text'
                                value={dados.cargo}
                                onChange={(e) => setDados({
                                    ...dados,
                                    cargo: e.target.value
                                })}
                            />
                            <Input label='Salário:'
                                id='input-salário'
                                placeholder='Informe o salário.'
                                type='text'
                                value={dados.salario}
                                onChange={(e) => setDados({
                                    ...dados,
                                    salario: e.target.value
                                })}
                            />
                            <Input label='Endereço:'
                                id='Input-endereco'
                                placeholder='Informe o endereço.'
                                type='text'
                                value={dados.endereco}
                                onChange={(e) => setDados({
                                    ...dados,
                                    endereco: e.target.value
                                })}
                            />
                            <Input
                                label='Jornada de trabalho:'
                                id='Input-jornada-trabalho'
                                placeholder='Informe a jornada de trabalho.'
                                type='text'
                                value={dados.jornada}
                                onChange={(e) => setDados({
                                    ...dados,
                                    jornada: e.target.value
                                })}
                            />
                        </div>
                        <div className={`d-flex flex-column flex-grow-1 gap-3`}>
                            <Input label='Tipo do contrato:'
                                id='input-contrato'
                                placeholder='Informe o tipo de contrato.'
                                type='text'
                                value={dados.contrato}
                                onChange={(e) => setDados({
                                    ...dados,
                                    contrato: e.target.value
                                })}
                            />
                            <Input label='Benefícios:'
                                id='input-benefícios'
                                placeholder='Informe os benefícios.'
                                type='text'
                                value={dados.beneficios}
                                onChange={(e) => setDados({
                                    ...dados,
                                    beneficios: e.target.value
                                })}
                            />
                            <Input label='Local de trabalho:'
                                id='input-local-trabalho'
                                placeholder='Informe o local de trabalho.'
                                type='text'
                                value={dados.local}
                                onChange={(e) => setDados({
                                    ...dados,
                                    local: e.target.value
                                })}
                            />
                            <Input label='Número de vagas ofertatas:'
                                id='input-n-vagas-ofertadas'
                                placeholder='Informe a quantidade de vagas ofertadas.'
                                type='number'
                                value={dados.vagas}
                                onChange={(e) => setDados({
                                    ...dados,
                                    vagas: e.target.value
                                })}
                            />
                        </div>
                    </div>
                    <Input
                        label='Pré-requisitos:'
                        id='Input-pre-requisitos'
                        placeholder='Informe os pré-requisitos.'
                        type='text'
                        value={dados.requisitos}
                        onChange={(e) => setDados({
                            ...dados,
                            requisitos: e.target.value
                        })}
                    />
                    <TextArea
                        id='input-objetivo'
                        placeholder='Digite aqui a descrição da vaga.'
                        label='Descrição da vaga:'
                        value={dados.objetivo}
                        onChange={(e) => setDados({
                            ...dados,
                            objetivo: e.target.value
                        })}
                    />
                    <ButtonFlat nome="Cadastrar vaga" />
                </div>
            </form>
        </div>

    )
}

export default Vagas; 