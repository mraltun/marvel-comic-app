import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.navlinkLogo} to='/'>
        <img src='../assets/marvelLogo.png' alt='logo' />
      </NavLink>
      <FaBars
        className={styles.hamburgerMenu}
        onClick={() => setNavbarOpen((prev) => !prev)}
      />
      <div className={`${styles.navbarLinks} ${navbarOpen ? "showMenu" : ""}`}>
        <NavLink className={styles.navlink} to='/' end>
          Home
        </NavLink>
        <NavLink className={styles.navlink} to='services'>
          Services
        </NavLink>
        <NavLink className={styles.navlink} to='contact-us'>
          Contact Us
        </NavLink>
        <NavLink className={styles.navlink} to='about'>
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
