import React from "react";
import UserHeader from "./UserHeader.jsx";
import { Route, Routes } from "react-router-dom";
import Feed from "../Feed/Feed.jsx";
import UserPhotoPost from "./UserPhotoPost.jsx";
import UserStats from "./UserStats.jsx";
import { UserContext } from "../../UserContext.jsx";

const Conta = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="stats" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default Conta;
