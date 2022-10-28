import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link to='https://github.com/mraltun'>
          <FaGithub className={styles.icons} />
        </Link>
        <Link to='https://www.linkedin.com/in/mraltun/'>
          <FaLinkedin className={styles.icons} />
        </Link>
        <Link to='https://twitter.com/mraltun62'>
          <FaTwitter className={styles.icons} />
        </Link>
      </div>
      <p className={styles.copyright}>&copy; 2022 Murat Altun.</p>
    </footer>
  );
};

export default Footer;
