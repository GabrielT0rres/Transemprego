import style from "./style.module.css"

const FilterSelect = (props) => {
    return (
        <div className={style.select}>
            <select defaultValue="">
            <option value="" disabled>{props.defaultOption}</option>
                {props.options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
            <span>↓</span>
        </div>
    )
}
export default FilterSelect