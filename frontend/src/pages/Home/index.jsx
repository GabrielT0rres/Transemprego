import style from './style.module.css'
import Navbar from '../../components/Navbar'
import FilterInput from '../../components/FilterInput'
import FilterSelect from '../../components/FilterSelect'
import Card from '../../components/Card'
import ButtonFlat from '../../components/ButtonFlat'
import { Link } from 'react-router-dom'
import axios from 'axios'
import api from "../../constants/api";
import { useMutation, useQuery } from 'react-query'
import CardLoading from '../../components/CardLoading'
import { useState, useEffect } from 'react'
import useAuth from '../../Hooks/useAuth'
const Home = () => {
    const [showContent, setShowContent] = useState(false);
    const auth = useAuth();

    const query = useQuery({
        queryKey: 'VAGAS',
        retry: 2,
        queryFn: async () => {
            return await axios.get(api.URL_API + '/vagas')
        }
    })

    const mutationCandidatar = useMutation({
        mutationKey: 'CANDIDATAR-SE-VAGA',
        mutationFn: async (data) => {
            return await axios.post(api.URL_API + '/candidatar', data, {
                headers: {
                    "Authorization": `Bearer ${JSON.parse(localStorage.getItem("user_token")).access_token}`
                }
            })
        },
        onSuccess: () => {
            auth.setInfoUser();
            console.log(auth.user)
        }
    })

    function onSubmit(data) {
        mutationCandidatar.mutate({ idVaga: data })
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, auth.user);

    return (
        <div className={style.home}>
            <Navbar />
            <div className={style.header}>
                <h2>Procure sua vaga aqui!</h2>
                <Link to='/empresa'>
                    <button>Para Empresas</button>
                </Link>
            </div>
            <div className={style.inputs}>
                <FilterInput placeholder="Área de atuação..." />
                <FilterInput placeholder="Empresa..." />
            </div>
            <div className={style.selects}>
                <FilterSelect defaultOption="Estado" options={['Bahia', 'São Paulo', 'Minas Gerais']} />
                <FilterSelect defaultOption="Ensino" options={['Bahia', 'São Paulo', 'Minas Gerais']} />
                <FilterSelect defaultOption="Tipo" options={['Bahia', 'São Paulo', 'Minas Gerais']} />
            </div>
            <div className={style.cards}>
                {query.isLoading || !showContent ? (
                    <>
                        <CardLoading />
                        <CardLoading />
                        <CardLoading />
                    </>
                ) : query.isError ? (
                    <div className={style.error404}>Error: {query.error.message}</div>
                ) : query.isSuccess ? (
                    query.data?.data.content.map((card) => (
                        <div>
                            <Card
                                key={card.id}
                                empresa={card.empresa.nomeFantasia}
                                vaga={card.cargo}
                                local={card.endereco}
                                user={card.usuarios}
                                onClick={() => { onSubmit(card.id) }}
                            />
                        </div>

                    ))
                ) : null}
            </div>

            <div className={style.mais}>
                <ButtonFlat nome="Mais Oportunidades" />
            </div>
            <footer className={style.footer}>

            </footer>
        </div>
    )
}

export default Home;