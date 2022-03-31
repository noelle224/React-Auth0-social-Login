import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const CreateConference = () => {
  const {  isAuthenticated } = useAuth0();

  return isAuthenticated && (<button>Create Conference</button>)

};


export default CreateConference;