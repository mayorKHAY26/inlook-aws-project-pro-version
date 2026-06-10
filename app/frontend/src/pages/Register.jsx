import React from "react";
import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegisterForm";

function Register() {
  return (
    <>
      <Navbar />
      <div className="center-page">
        <RegisterForm />
      </div>
    </>
  );
}

export default Register;