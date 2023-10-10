import style from './style.module.css'
const IconProfile = (props) => {
    return (
        <div className={style.icon}>
            <img src={props.src} alt={props.nome} />
            <p>{props.nome}</p>
        </div>
    )
}
export default IconProfile;