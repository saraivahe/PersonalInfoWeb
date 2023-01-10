import React, { useEffect } from "react";
import { signinRedirectCallback } from "../services/user-service";
import { useHistory } from "react-router-dom";

function Signin() {
  const history = useHistory();
  useEffect(() => {
    async function signinAsync() {
      await signinRedirectCallback();
      history.push("/");
    }
    signinAsync();
  }, [history]);

  return <div>Redirecting...</div>;
}

export default Signin;
