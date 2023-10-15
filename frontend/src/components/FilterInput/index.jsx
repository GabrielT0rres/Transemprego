import style from "./style.module.css"
import Logo from "../../assets/search.svg"

const FilterInput = (props) => {
    return (
        <div className={style.input}>
            <input type="text" placeholder={props.placeholder} />
            <img src={Logo} alt="pesquisar" />
        </div>
    )
}
export default FilterInput