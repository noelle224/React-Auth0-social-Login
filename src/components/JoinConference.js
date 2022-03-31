import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const JoinConference = () => {
  const {  isAuthenticated } = useAuth0();

  return isAuthenticated && (<button>Join Conference</button>)

};


export default JoinConference;