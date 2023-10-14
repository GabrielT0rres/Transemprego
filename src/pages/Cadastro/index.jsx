import Input from "../../components/Input";
import ButtonFlat from "../../components/ButtonFlat"
import style from "./style.module.css"
import { Link } from "react-router-dom";


const Cadastro = () => {
    return (
        <div className={`${style.div_cadastro} bg_black_1200 `}>
            <div>
                <h1 className={`${style.h1} mb-4`}>Cadastro</h1>
                
            </div>

            <div className={`d-flex flex-column gap-4`}>
                <Input
                    type='text'
                    nome='E-mail'
                    id='Input-e-mail'
                    placeholder='Digite aqui seu e-mail.'
                    className={`${style.Input_email} `}
                    label='E-mail:' >
                </Input>
                <Input
                    type='password'
                    nome='Senha'
                    id='Input-senha'
                    placeholder='Digite aqui sua senha.'
                    className={`${style.Input_senha}`}
                    label='Senha:' >
                </Input>
                <Input
                    type='password'
                    nome='confirme'
                    id='Input-confirme'
                    placeholder='Confirme aqui sua senha.'
                    className={`${style.Input_senha}`}
                    label='Confirme sua senha:' >
                </Input>
                <div className="mt-5">
                    <ButtonFlat
                        nome='Cadastrar'>
                    </ButtonFlat>
                </div>
            </div>
        </div>
    );
};
export default Cadastro;