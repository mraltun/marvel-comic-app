import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href='https://github.com/mraltun' target='_blank' rel='noreferrer'>
          <FaGithub className={styles.icons} />
        </a>
        <a
          href='https://www.linkedin.com/in/mraltun/'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedin className={styles.icons} />
        </a>
        <a
          href='https://twitter.com/mraltun62'
          target='_blank'
          rel='noreferrer'
        >
          <FaTwitter className={styles.icons} />
        </a>
        <span> - </span>
        <p>&copy; 2022 Murat Altun.</p>
      </div>
    </footer>
  );
};

export default Footer;
