import Input from "../../components/Input";
import ButtonFlat from "../../components/ButtonFlat"
import style from "./style.module.css"
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";



const Cadastro = () => {
    const [form, setForm] = useState({})
    const navigate = useNavigate();    
    const auth = useAuth()

    function onSubmit(e) {
        e.preventDefault()
        if (form.senha === form.confirme) {
            auth.register(form)
            navigate('/perfil/cadastro');
        }        
    }


    return (
        <div className={`${style.div_cadastro} bg_black_1200 `}>
            <div>
                <h1 className={`${style.h1} mb-4`}>Cadastro</h1>
            </div>

            <div className={`d-flex flex-column gap-4`}>
                <form onSubmit={(e) => onSubmit(e)}>
                    <Input
                        type='text'
                        nome='E-mail'
                        id='Input-e-mail'
                        placeholder='Digite aqui seu e-mail.'
                        className={`${style.Input_email} `}
                        label='E-mail:'
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    >
                    </Input>
                    <Input
                        type='password'
                        nome='Senha'
                        id='Input-senha'
                        placeholder='Digite aqui sua senha.'
                        className={`${style.Input_senha}`}
                        label='Senha:'
                        value={form.senha}
                        onChange={(e) => setForm({ ...form, senha: e.target.value })}
                    >
                    </Input>
                    <Input
                        type='password'
                        nome='confirme'
                        id='Input-confirme'
                        placeholder='Confirme aqui sua senha.'
                        className={`${style.Input_senha}`}
                        label='Confirme sua senha:'
                        value={form.confirme}
                        onChange={(e) => setForm({ ...form, confirme: e.target.value })}
                    >
                    </Input>
                    <div className="mt-5">
                        <ButtonFlat
                            nome='Cadastrar'>
                        </ButtonFlat>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Cadastro;