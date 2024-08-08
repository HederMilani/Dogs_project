import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Login from "./Components/Login/Login.jsx";
import { UserStorage } from "./UserContext.jsx";
import Conta from "./Components/Conta/Conta.jsx";
import ProtectedRouter from "./Helper/ProtectedRouter.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route
              path="/conta/*"
              element={
                <ProtectedRouter>
                  <Conta />
                </ProtectedRouter>
              }
            />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
