import React from "react";
import styles from "./LoginForm.module.css";
import styleBtn from "../Form/Button.module.css";
import Input from "../Form/Input.jsx";
import Button from "../Form/Button.jsx";
import useForm from "../../Hooks/UseForm.jsx";
import { UserContext } from "../../UserContext.jsx";
import Error from "../../Helper/Error.jsx";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const { userLogin, error, loading } = React.useContext(UserContext);
  const username = useForm();
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.lost} to={"/login/lost"}>
        Perdeu a senha?
      </Link>
      <div className={styles.create}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={styleBtn.button} to={"/login/create"}>
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
