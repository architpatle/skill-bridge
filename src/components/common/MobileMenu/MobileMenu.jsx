import React from 'react'
import styles from './MobileMenu.module.css'
import { Link } from 'react-router-dom';
import { RiCloseFill } from "react-icons/ri";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <menu className={`${styles.MobileMenu} ${menuOpen ? styles.open : ' '} `}>

            <div className={`${styles.MobileMenuContent}`}>

                {/* close btn */}
                <div className={`${styles.closeBtn}`} onClick={() => { setMenuOpen(false); console.log("Close") }}>
                    <RiCloseFill size={24} />
                </div>

                {/* Navlinks */}
                <div className={`${styles.navLinks} `}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/analyse">Analyse</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Login Button */}
                <div className={`${styles.loginBtnWrapper} `}>
                    <button className='btn-primary' >Login</button>
                </div>

            </div>
        </menu>
    )
}

export default MobileMenu
