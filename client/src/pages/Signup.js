import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpStyles.css";
import Layout from "../components/Layout";
import Button from "../components/Button";
import axios from "axios";

function Signup() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [RE_email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        {
          first_name: first_name, // Match the keys with your backend expectations
          last_name: last_name,
          RE_email: RE_email,
          password: password,
        }
      );

      console.log("Signup successful", response.data);
      navigate("/login");
    } catch (error) {
      alert(
        "Signup failed: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };

  return (
    <>
      <Layout>
        <form className="signup-form" onSubmit={handleSignup}>
          <div>
            <h1>Join Us Today!</h1>
            <p>Fill in the details below to create your account.</p>
          </div>

          <div className="name-box">
            <label className="label-firstname" htmlFor="input-firstname">
              First Name:
            </label>
            <input
              className="firstname-style"
              type="text"
              id="input-firstname"
              placeholder="Enter your first name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="name-box">
            <label className="label-lastname" htmlFor="input-lastname">
              Last Name:
            </label>
            <input
              className="lastname-style"
              type="text"
              id="input-lastname"
              placeholder="Enter your last name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="email-box">
            <label className="label-email" htmlFor="input-email">
              Email:
            </label>
            <input
              className="email-style"
              type="email"
              id="input-email"
              placeholder="email@myemail.com"
              value={RE_email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="password-box">
            <label className="label-password" htmlFor="input-password">
              Password:
            </label>
            <input
              className="password-style"
              type="password"
              id="input-password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="btn-div">
            <Button type="submit" text="Create Account" />
          </div>
        </form>
      </Layout>
    </>
  );
}

export default Signup;
