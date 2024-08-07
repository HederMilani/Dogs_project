import React from "react";
import styles from "./Login.module.css";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm.jsx";
import LoginCreate from "./LoginCreate.jsx";
import LoginPasswordLost from "./LoginPasswordLost.jsx";
import LoginPasswordReset from "./LoginPasswordReset.jsx";
import { UserContext } from "../../UserContext.jsx";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to={"/conta"} />;
  return (
    <section>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="lost" element={<LoginPasswordLost />} />
        <Route path="reset" element={<LoginPasswordReset />} />
      </Routes>
    </section>
  );
};

export default Login;
