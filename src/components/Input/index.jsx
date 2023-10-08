import style from './style.module.css'

const Input = (props) => {
    function handleFocus(e) {
        e.target.placeholder = "";
      }

      function handleBlur(e) {
        if (!e.target.value) {
          e.target.placeholder = props.placeholder;
        }
      }
      
    return (
        <div className={`${style.div}`}>
            <label htmlFor={props.id}
                className={`${style.label}`}>
                {props.label}</label>
            <input
                type="text"
                name={props.nome}
                id={props.id}
                placeholder={props.placeholder}
                className={`${style.input} `}
                onFocus={handleFocus}
                onBlur={handleBlur}
            
                />
        </div>
    )
}
export default Input;   
