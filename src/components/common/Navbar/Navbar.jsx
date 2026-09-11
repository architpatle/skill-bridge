import { useState } from 'react'
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { RiMenu2Fill } from "react-icons/ri";
import MobileMenu from '../MobileMenu/MobileMenu';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className={`${styles.navbar}`}>

        <div className={`${styles.navbarContent}`}>

          {/* Logo */}
          <div className={`${styles.logo} `}>
            Skill<span>Bridge</span>
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

          {/* Hamburger */}
          <div className={`${styles.hamburger}`}
            onClick={() => { setMenuOpen(true); console.log("OPen") }}>
            <RiMenu2Fill size={20} />
          </div>

        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  )
}

export default Navbar
