import style from './style.module.css'

const TextArea = (props) => {
    return (
        <div className={`${style.div}`}>
            <label
                className={`${style.label}`}
                htmlFor={props.id}>{props.label}</label>
            <textarea
                rows={7}
                className={`${style.textarea}`}
                id={props.id}
                placeholder={props.placeholder}
                value={props.value}
            />
        </div>

    )
}

export default TextArea;
