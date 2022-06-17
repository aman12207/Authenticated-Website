import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <div className="login center">
    <h1>Movies DB</h1>
    <button className="btn" onClick={() => loginWithRedirect()}>Log In</button>
  </div>
};

export default LoginButton;