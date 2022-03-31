import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const CallAPI = () => {
  const {  isAuthenticated } = useAuth0();

  const callapi = () => {
      fetch("http://localhost:4000/")
      .then(res=>res.text())
      .then(res=>console.log(res));

  }

  return isAuthenticated && (<button onClick={callapi}>CALL API</button>)

};


export default CallAPI