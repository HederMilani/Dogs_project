import React from "react";
import styles from "./LoginForm.module.css";
import Input from "../Form/Input.jsx";
import Button from "../Form/Button.jsx";
import useForm from "../../Hooks/UseForm.jsx";
import { TOKEN_POST, USER_GET } from "../../api.js";
import { UserContext } from "../../UserContext.jsx";

const LoginForm = () => {
  const { userLogin } = React.useContext(UserContext);
  const username = useForm();
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
    </section>
  );
};

export default LoginForm;
