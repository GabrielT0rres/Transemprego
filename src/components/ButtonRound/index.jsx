import style from './style.module.css'

const ButtonRound = (props) => {
    return (
        <div className={style.div_btn}>
            <button
                nome={props.nome}
                value={props.value}
                className={`${style.btn} bg_primary_500`}>
                {props.nome}
            </button>
        </div>
    )
}
export default ButtonRound;