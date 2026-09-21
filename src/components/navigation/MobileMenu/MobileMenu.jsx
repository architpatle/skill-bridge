import styles from './MobileMenu.module.css'
import { Link } from 'react-router-dom';
import { RiCloseFill } from "react-icons/ri";
import Button from '../../ui/Button/Button';

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <menu className={`${styles.MobileMenu} ${menuOpen ? styles.open : ' '} `}>

            <div className={`${styles.MobileMenuContent}`}>

                {/* close btn */}
                <div className={`${styles.closeBtn}`} onClick={() => { setMenuOpen(false) }}>
                    <RiCloseFill size={24} />
                </div>

                {/* Navlinks */}
                <div className={`${styles.navLinks} `}>
                    <ul>
                        <li>
                            <Link to="/"  onClick={() => { setMenuOpen(false) }} >Home</Link>
                        </li>
                        <li>
                            <Link to="/about"  onClick={() => { setMenuOpen(false) }} >About</Link>
                        </li>
                        <li>
                            <Link to="/analyse"  onClick={() => { setMenuOpen(false) }}>Analyse</Link>
                        </li>
                        <li>
                            <Link to="/contact"  onClick={() => { setMenuOpen(false) }}>Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Login Button */}
                <div className={`${styles.loginBtnWrapper} `} >
                    <Button value="Login" />
                </div>

            </div>
        </menu>
    )
}

export default MobileMenu
