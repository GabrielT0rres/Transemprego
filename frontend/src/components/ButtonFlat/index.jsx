import style from './style.module.css';

const ButtonFlat = (props) => {
    return (
        <div className='d-flex'>
            <button className={`${style.btn} bg_primary_100`}>
                {props.nome}
            </button>
        </div>
        
    )
}

export default ButtonFlat;