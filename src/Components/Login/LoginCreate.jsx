import React, { useContext } from "react";
import styles from "./LoginCreate.module.css";
import useForm from "../../Hooks/UseForm.jsx";
import Input from "../Form/Input.jsx";
import Button from "../Form/Button.jsx";
import { USER_POST } from "../../api.js";
import { UserContext } from "../../UserContext.jsx";
import useFetch from "../../Hooks/useFetch.jsx";
import Error from "../../Helper/Error.jsx";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && email.validate() && password.validate()) {
      const { url, options } = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      });
      const response = await request(url, options);
      if (response.ok) userLogin(username.value, password.value);
    }
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
