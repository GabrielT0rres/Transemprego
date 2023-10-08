import style from './style.module.css'

const Button = (props) => {
    return(

        <div className={style.div_btn}>
            <button nome={props.nome} value={props.value} id={props.id} className={style.btn}>
                {props.nome}
            </button>
        </div>




    )
}
export default Button;