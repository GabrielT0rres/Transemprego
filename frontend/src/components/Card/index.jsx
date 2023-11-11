import style from './style.module.css'
import ButtonRound from '../ButtonRound'
import ButtonFlat from '../ButtonFlat';
import useAuth from '../../Hooks/useAuth';

const Card = (props) => {
    const auth = useAuth();
    return (
        <div className={style.card}>
            <h6>{props.local}</h6>
            <h3>{props.empresa}</h3>
            <h1>{props.vaga}</h1>
            <a> {props.user.some(e => e.id == auth.user.id) ?
                <ButtonFlat
                    nome="Candidatado"
                />
                :
                <ButtonRound
                    onClick={props.onClick}
                    onSubmit={props.onSubmit}
                    nome="Candidatar" />
            }

            </a>
        </div>
    )
}
export default Card;