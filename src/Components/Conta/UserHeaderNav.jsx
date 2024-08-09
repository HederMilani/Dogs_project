import React from "react";
import styles from "./UserHeaderNav.module.css";
import MinhasFotos from "../../Assets/feed.svg?react";
import Estatisticas from "../../Assets/estatisticas.svg?react";
import AdicionarFotos from "../../Assets/adicionar.svg?react";
import Sair from "../../Assets/sair.svg?react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext.jsx";

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    userLogout();
    navigate("/login");
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <MinhasFotos />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/conta/stats">
        <Estatisticas />
        {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to="/conta/post">
        <AdicionarFotos />
        {mobile && "Adicionar Fotos"}
      </NavLink>
      <button onClick={handleClick}>
        <Sair />
        {mobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
