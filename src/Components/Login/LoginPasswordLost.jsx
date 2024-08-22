import React from "react";
import Input from "../Form/Input.jsx";
import Button from "../Form/Button.jsx";
import useForm from "../../Hooks/UseForm.jsx";
import useFetch from "../../Hooks/useFetch.jsx";
import { PASSWORD_LOST } from "../../api.js";
import Error from "../../Helper/Error.jsx";

const LoginPasswordLost = () => {
  const login = useForm();
  const { request, data, loading, error } = useFetch();
  // console.log(window.location.href.replace("lost", "reset"));

  async function handleSubmit(e) {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("lost", "reset"),
      });

      await request(url, options);
    }
  }
  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
