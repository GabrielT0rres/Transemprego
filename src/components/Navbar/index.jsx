import style from './style.module.css'
import IconProfile from '../IconProfile'
import avatar from '../../assets/Ellipse 2.svg'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div>
                <h1>Trans</h1>
            </div>
            <div>
                <IconProfile src={avatar} nome="Emilly Castro" />
            </div>

        </nav>
    )
}
export default Navbar;