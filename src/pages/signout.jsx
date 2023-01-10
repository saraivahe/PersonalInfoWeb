import React, { useEffect } from "react";
import { signoutRedirectCallback } from "../services/user-service";
import { useHistory } from "react-router-dom";

function Signout() {
  const history = useHistory();
  useEffect(() => {
    async function signoutAsync() {
      await signoutRedirectCallback();
      history.push("/");
    }
    signoutAsync();
  }, [history]);

  return <div>Redirecting...</div>;
}

export default Signout;
