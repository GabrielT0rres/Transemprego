import style from './style.module.css'
import IconProfile from '../IconProfile'
import avatar from '../../assets/Ellipse 2.svg'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import ButtonRound from '../ButtonRound'

const Navbar = () => {
    const { signed, signout } = useAuth()

    return (
        <nav className={style.nav}>
            <div>
                <Link to="/">
                    <h1 >Trans</h1>
                </Link>
            </div>
            {signed ?
                <div className='d-flex gap-4'>
                    <IconProfile src={avatar} nome={JSON.parse(localStorage.getItem('user_data')).nomeSocial} />
                    <ButtonRound onClick={() => { signout() }}   nome="Sair" />
                </div>
                :
                <div className='d-flex gap-4'>
                    <Link to="/login">
                        <ButtonRound nome="Entrar" />
                    </Link>
                    <Link to="/cadastro">
                        <ButtonRound nome="Cadastrar-se" />
                    </Link>
                </div>
            }
        </nav>
    )
}
export default Navbar;