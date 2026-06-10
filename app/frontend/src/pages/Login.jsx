import React from "react";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <>
      <Navbar />
      <div className="center-page">
        <LoginForm />
      </div>
    </>
  );
}

export default Login;