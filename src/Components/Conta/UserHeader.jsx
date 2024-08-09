import React from "react";
import styles from "./UserHeader.module.css";
import UserHeaderNav from "./UserHeaderNav.jsx";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/post":
        setTitle("Poste Sua Foto");
        break;
      case "/conta/stats":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Feed");
        break;
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
