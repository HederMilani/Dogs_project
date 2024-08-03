import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Dog from "../Assets/dogs.svg?react";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Dogs | Home">
          <Dog />
        </Link>
        <Link to="/login" className={styles.login}>
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
