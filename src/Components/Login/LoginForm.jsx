import React from "react";
import styles from "./LoginForm.module.css";
import Input from "../Form/Input.jsx";
import Button from "../Form/Button.jsx";
import useForm from "../../Hooks/UseForm.jsx";
import { TOKEN_POST, USER_GET } from "../../api.js";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  //console.log(username.value);

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUser(token);
    }
  });

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
      window.localStorage.setItem("token", json.token);
      await getUser(json.token);
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
