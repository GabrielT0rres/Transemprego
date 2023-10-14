import style from './style.module.css'
import Navbar from '../../components/Navbar'
import FilterInput from '../../components/FilterInput'
import FilterSelect from '../../components/FilterSelect'
import Card from '../../components/Card'
import {CARDS_DATA} from '../../constants/contants'
import ButtonFlat from '../../components/ButtonFlat'
const Home = () => {
    return (
        <div className={style.home}>
                <Navbar />
                <div className={style.header}>
                    <h2>Procure sua vaga aqui!</h2>
                    <button>Para Empresas</button>
                </div>
                <div className={style.inputs}>
                    <FilterInput placeholder="Área de atuação..."/>
                    <FilterInput placeholder="Empresa..."/>
                </div>
                <div className={style.selects}>
                    <FilterSelect defaultOption="Estado" options={['Bahia','São Paulo','Minas Gerais']} />
                    <FilterSelect defaultOption="Ensino" options={['Bahia','São Paulo','Minas Gerais']}/>
                    <FilterSelect defaultOption="Tipo" options={['Bahia','São Paulo','Minas Gerais']}/>
                </div>
                <div className={style.cards}>
                {CARDS_DATA.map((card, index) => (
                <Card 
                    key={index} 
                    empresa={card.empresa} 
                    vaga={card.vaga} 
                    local={card.local}
                />
            ))}
                </div>
                <div className={style.mais}>
                <ButtonFlat nome="Mais Oportunidades"/>
                </div>
                <footer className={style.footer}>

                    </footer>
            </div>
    )
}

export default Home;