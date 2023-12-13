import React from "react";
import { useNavigate, Link } from "react-router-dom";
import auth from "../services/auth";

const classes = "btn btn-primary";

const AuthButton = () => {
  const navigate = useNavigate();

  if (!auth.isAuthenticated) {
    return (
      <Link className={classes} to="/login">
        Login
      </Link>
    );
  }

  const logout = () => {
    auth.signout().then(() => navigate("/"));
  };

  return (
    <div>
      Welcome!
      <button className={classes} onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default AuthButton;
