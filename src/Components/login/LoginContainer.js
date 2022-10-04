import React from "react";
import "../../StyleSheets/loginForm.css";
import LoginForm from "./LoginForm";

function LoginContainer() {
  return (
    <div className="container">
      <div className="subContainer1"></div>
      <LoginForm />
    </div>
  );
}

export default LoginContainer;
