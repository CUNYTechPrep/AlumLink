import React from "react";
import "./LoginStyles.css";
import Layout from "../components/Layout";
import Button from "../components/Button";

function Login() {
  const handleClick = () => {
    // this is where we will put what happens for each button click
  };
  const handleClick2 = () => {
    // this is where we will put what happens for each button click
  };

  return (
    <>
      <Layout>
        <div className="login-form">
          <div className="">
            <h1>Ready to get Started?</h1>
            <p>
              No need for a password. Just enter your email and we will log you
              in magically!
            </p>
          </div>

          <div className="email-box">
            <label className="label-email" htmlFor="input-email">
              Email:
            </label>
            <input
              className="email-style"
              type="email"
              name="input-email"
              id="input-email"
              placeholder="email@myemail.com"
            />
          </div>

          <div className="btn-div">
            <Button text="Request Magic Link" onClick={handleClick} />
          </div>

          <div>
            <p>Don't have an account yet? Signing Up is a breeze!</p>
            <Button text="Create Account" onClick={handleClick2} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Login;
