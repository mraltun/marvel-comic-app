import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/marvelLogo.png";
import styles from "./Navbar.module.css";

const ANavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <header>
        <nav>
          <Link to='/' className={styles.logo}>
            <img src={Logo} alt='' />
          </Link>
          {navbarOpen ? (
            <FaTimes
              className={styles.hamMenu}
              onClick={() => setNavbarOpen(!navbarOpen)}
            />
          ) : (
            <FaBars
              className={styles.hamMenu}
              onClick={() => setNavbarOpen(!navbarOpen)}
            />
          )}
          <ul
            className={`navBar ${navbarOpen ? "active" : ""}`}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/characters'>Characters</NavLink>
            </li>
            <li>
              <NavLink to='/comics'>Comics</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {/* <section className='home'></section> */}
    </>
  );
};

export default ANavbar;
