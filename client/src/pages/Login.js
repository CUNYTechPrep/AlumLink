import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Auth from "../services/auth";
import "./LoginStyles.css";
import Layout from "../components/Layout";
import Button from "../components/Button";

function Login() {
  const [RE_email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await Auth.authenticate(RE_email, password);
      navigate("/");
    } catch (error) {
      alert(
        "Login failed: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };

  return (
    <Layout>
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Ready to get Started?</h1>
        <p>Enter your email and password to log in.</p>

        <div className="email-box">
          <label htmlFor="input-email">Email:</label>
          <input
            type="email"
            id="input-email"
            placeholder="email@myemail.com"
            value={RE_email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password-box">
          <label htmlFor="input-password">Password:</label>
          <input
            type="password"
            id="input-password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="btn-div">
          <Button type="submit" text="Login" />
        </div>

        <p>Don't have an account yet? Signing Up is a breeze!</p>
        <Link to="/signup">
          <Button text="Create Account" />
        </Link>
      </form>
    </Layout>
  );
}

export default Login;
