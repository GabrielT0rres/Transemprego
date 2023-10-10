import style from './style.module.css'
import ButtonRound from '../ButtonRound'

const Card = (props) => {
    return (
        <div className={style.card}>
            <h6>{props.local}</h6>
            <h3>{props.empresa}</h3>
            <h1>{props.vaga}</h1>
            <a>
                <ButtonRound nome="Candidatar"/>
            </a>
        </div>
    )
}
export default Card;