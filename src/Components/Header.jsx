import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName={styles.active} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName={styles.active}>
              Login / Criar
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
