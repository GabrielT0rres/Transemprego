import style from './style.module.css'
import IconProfile from '../IconProfile'
import avatar from '../../assets/Ellipse 2.svg'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import ButtonRound from '../ButtonRound'

const Navbar = () => {
    const { user } = useAuth()

    return (
        <nav className={style.nav}>
            <div>
                <Link to="/">
                    <h1 >Trans</h1>
                </Link>
            </div>
            {user ?
                <div>
                    <IconProfile src={avatar} nome="Emilly Castro" />
                </div>
                :
                <div>
                    <Link to="/login">
                        <ButtonRound nome="Entrar" />
                    </Link>
                </div>
            }
        </nav>
    )
}
export default Navbar;