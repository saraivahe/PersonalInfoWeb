import React from "react";
import { signinRedirect } from "../services/user-service";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function Login() {
  const user = useSelector((state) => state.auth.user);

  function login() {
    signinRedirect();
  }

  return user ? (
    <Redirect to={"/"} />
  ) : (
    <div>
      <h1>Greetings!</h1>
      <p>
        Welcome to the <b>best</b> Personal Information Portal.
      </p>
      <p>You can start by signing in.</p>
      <p>
        💡 <strong>Little Tip: </strong>
        <em>User: 'henrique', Pass: 'henrique'</em>
      </p>
      <button className="button" onClick={() => login()}>
        Login
      </button>
    </div>
  );
}

export default Login;
