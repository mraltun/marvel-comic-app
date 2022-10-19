import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import MarvelLogo from "../assets/marvelLogo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={FaBars} className={styles.hamburgerMenu} alt='' />
      <NavLink className={styles.navlinkLogo} to='/'>
        <img src='../assets/marvelLogo.png' alt='logo' />
      </NavLink>
      <div className={styles.navbarLinks}>
        <NavLink
          className={(isActive) => (isActive ? styles.navlink : undefined)}
          to='about'
        >
          About
        </NavLink>
        <NavLink className={styles.navlink} to='services'>
          Services
        </NavLink>
        <NavLink className={styles.navlink} to='contact-us'>
          Contact Us
        </NavLink>
        <NavLink className={styles.navlink} to='sign-up'>
          Sign Up
        </NavLink>
        {/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
      </div>
    </nav>
  );
};

export default Navbar;
