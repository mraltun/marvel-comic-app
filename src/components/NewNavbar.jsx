import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/marvelLogo.png";
import styles from "./NewNavbar.module.css";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className='logo'>
        <img src={Logo} alt='logo' />
      </div>
      <ul
        className={navbarOpen ? `${styles.navMenu} active` : styles.navMenu}
        onClick={() => setNavbarOpen(false)}
      >
        <li className={styles.navItem}>
          <Link to='/'>Home</Link>
        </li>
        <li className={styles.navItem}>
          <NavLink to='characters'>Characters</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to='comics'>Comics</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to='about'>About</NavLink>
        </li>
      </ul>
      <div className='hamburger' onClick={() => setNavbarOpen(!navbarOpen)}>
        {navbarOpen ? (
          <FaTimes size={30} style={{ color: "#f8f8f8" }} />
        ) : (
          <FaBars size={30} style={{ color: "#f8f8f8" }} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
