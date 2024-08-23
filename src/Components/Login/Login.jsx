import React from "react";
import styles from "./Login.module.css";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm.jsx";
import LoginCreate from "./LoginCreate.jsx";
import LoginPasswordLost from "./LoginPasswordLost.jsx";
import LoginPasswordReset from "./LoginPasswordReset.jsx";
import { UserContext } from "../../UserContext.jsx";
import NotFound from "../../NotFound.jsx";
import Head from "../../Helper/Head.jsx";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to={"/conta"} />;
  return (
    <section className={styles.login}>
      <Head title="Login" description="Tela de login do site Dogs." />
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="lost" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
