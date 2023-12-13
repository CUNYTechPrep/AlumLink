import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Import useAuth hook
import "./LoginStyles.css";
import Layout from "../components/Layout";
import AuthButton from "../components/Button";

function Login() {
  const [RE_email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, flashMessage, setFlashMessage } = useAuth(); // Destructure from useAuth
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await login(RE_email, password); // Use login function from context
      navigate("/"); // Redirect to the home page after successful login
    } catch (error) {
      setFlashMessage(
        "Login failed: " +
          (error.response ? error.response.data.message : error.message)
      );
      navigate("/Login");
    }
  };

  return (
    <Layout>
      <form className="login-form" onSubmit={handleLogin}>
        {flashMessage && (
          <div className="alert alert-danger" role="alert">
            {flashMessage}
          </div>
        )}

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
          <AuthButton type="submit" text="Login" />
        </div>

        <p>Don't have an account yet? Signing Up is a breeze!</p>
        <Link to="/signup">
          <AuthButton text="Create Account" />
        </Link>
      </form>
    </Layout>
  );
}

export default Login;
