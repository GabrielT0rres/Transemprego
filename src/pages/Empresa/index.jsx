import Input from "../../components/Input";
import ButtonFlat from "../../components/ButtonFlat"
import style from "./style.module.css"
import Navbar from '../../components/Navbar'
import {INPUT_FIELDS_EMPRESA} from '../../constants/contants'




const Empresa = () => {
    return (
        <>
            <Navbar />
            <div className={style.main}>
                <label className={style.label}>Dados da Empresa</label>
                <div className={style.container}>
                {INPUT_FIELDS_EMPRESA.map((inputField) => (
                <div className={style.inputs} key={inputField.id}>
                    <label htmlFor={inputField.id}>{inputField.label}</label>
                    <Input
                        type="text"
                        nome={inputField.nome}
                        id={inputField.id}
                        placeholder={inputField.placeholder}
                        className={style.input}
                    />
                </div>
            ))}
                </div>
                <div className={style.mais}>
                <ButtonFlat nome="Cadastrar Empresa"/>
                </div>
            </div>
        </>
    );
};
export default Empresa;

