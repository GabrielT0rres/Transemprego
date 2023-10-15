import style from './style.module.css'
import IconProfile from '../IconProfile'
import avatar from '../../assets/Ellipse 2.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div>
                <Link to="/">
                    <h1 >Trans</h1>
                </Link>
            </div>
            <div>
                <IconProfile src={avatar} nome="Emilly Castro" />
            </div>

        </nav>
    )
}
export default Navbar;