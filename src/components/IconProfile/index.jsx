import { Link } from 'react-router-dom';
import style from './style.module.css'

const IconProfile = (props) => {
    return (
        <div className={style.icon}>
            <Link className={`${style.link}`}>
                <img src={props.src} alt={props.nome} />
            </Link>
            <Link className={`${style.link}` } to='/perfil/cadastro' >
                <p>{props.nome} </p>
            </Link>
        </div>
    )
}
export default IconProfile;