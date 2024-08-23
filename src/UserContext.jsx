import React from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./api.js";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext(undefined);

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(() => {
    setLogin(false);
    setData(null);
    setError(null);
    setLoading(false);
    window.localStorage.removeItem("token");
  }, []);

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setLoading(true);
          setError(null);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token inválido");
          await getUser(token);
        } catch (e) {
          console.log(e);
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin().then((r) => r);
  }, [userLogout]);

  async function userLogin(username, password) {
    try {
      setLoading(true);
      setError(null);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      //console.log(tokenRes);
      if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`);
      const { token } = await tokenRes.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/conta");
    } catch (e) {
      console.log(e);
      setError(e.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, login, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
