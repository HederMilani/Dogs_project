import React from "react";
import Input from "../Form/Input.jsx";
import useFetch from "../../Hooks/useFetch.jsx";
import useForm from "../../Hooks/UseForm.jsx";
import Error from "../../Helper/Error.jsx";
import { PASSWORD_RESET } from "../../api.js";
import Button from "../Form/Button.jsx";
import { useNavigate } from "react-router-dom";
import Head from "../../Helper/Head.jsx";

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const navigate = useNavigate();
  const password = useForm();
  const { loading, error, request } = useFetch();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });

      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Resete a senha" />
      <h1 className="title"> Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordReset;
