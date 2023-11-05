import Input from "../../components/Input";
import ButtonFlat from "../../components/ButtonFlat"
import style from "./style.module.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../Hooks/useLogin";


const Login = () => {    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const mutation = useLogin();


    function onSubmit(e) {
        e.preventDefault();
        mutation.mutate({
            username: email,
            password: password
        })
    }

    return (
        <div className={`${style.div_login} bg_black_1200 `}>
            <div>
                <h1 className={`${style.h1} mb-4`}>Login</h1>
                <p className={`${style.p}`}>Novo neste site? <Link to={'/cadastro'} className={`${style.link}`}>Registre-se</Link></p>
            </div>
            <form onSubmit={(e) => onSubmit(e) }>
                <div className={`d-flex flex-column gap-4`}>
                    <Input
                        type='text'
                        nome='E-mail'
                        id='Input-e-mail'
                        placeholder='Digite aqui seu e-mail.'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`${style.Input_email} `}
                        label='E-mail:' >
                    </Input>
                    <Input
                        type='password'
                        nome='Senha'
                        id='Input-senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Digite aqui sua senha.'
                        className={`${style.Input_senha}`}
                        label='Senha:' >
                    </Input>
                    <div className="mt-5">
                        <ButtonFlat
                            nome='Login'>
                        </ButtonFlat>
                    </div>
                </div>
            </form>

        </div>
    );
};
export default Login;