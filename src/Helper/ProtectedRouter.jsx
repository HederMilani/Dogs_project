import React from "react";
import { UserContext } from "../UserContext.jsx";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return children;
  } else if (login === false) {
    return <Navigate to="/login" />;
  } else {
    return null;
  }
};

export default ProtectedRouter;
