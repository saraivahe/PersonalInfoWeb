import React, { useState } from "react";
import { signoutRedirect } from "../services/user-service";
import { useSelector } from "react-redux";
import * as apiService from "../services/api-service";
import { prettifyJson } from "../utils/json-utils";

function Home() {
  const user = useSelector((state) => state.auth.user);

  const [personalInfoData, setPersonalInfoData] = useState(null);

  function signOut() {
    signoutRedirect();
  }

  async function getPersonalInfo() {
    const personalInfo = await apiService.getPersonalInfoFromApi();
    setPersonalInfoData(personalInfo);
  }

  return (
    <>
      <h1>Home</h1>
      <p>
        Hello, <b>{user.profile.name}</b>
      </p>
      <p>
        Since you have successfuly logged in, we have provided you with a{" "}
        <i>secret token</i> that you can use to call our Personal Information
        API
      </p>
      <button
        className="button button-outline"
        onClick={() => getPersonalInfo()}
      >
        Get Personal Data
      </button>
      <button className="button button-clear" onClick={() => signOut()}>
        Sign Out
      </button>
      <pre>
        <code>
          {prettifyJson(
            personalInfoData
              ? personalInfoData
              : "No personal data is available at the moment :("
          )}
        </code>
      </pre>
    </>
  );
}

export default Home;
