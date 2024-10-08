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
import Photo from "./Components/Photo/Photo.jsx";
import UserProfile from "./Components/Conta/UserProfile.jsx";
import NotFound from "./NotFound.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
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
              <Route path="photo/:id" element={<Photo />} />
              <Route path="/profile/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
