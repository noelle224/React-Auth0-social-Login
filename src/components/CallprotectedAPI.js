import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const CallprotectedAPI = () => {
  const {  isAuthenticated, getAccessTokenSilently } = useAuth0();

  async function callprotectedapi () {

     const token = await getAccessTokenSilently();
     console.log(token);

     //code to pass the token

     // const response = await axios.get("http://localhost:4000/protected", {
       //headers : {
        // authorization : 'Bearer ${token}'
       //}
  }



    //fetch("http://localhost:4000/protected")
    //.then(res=>res.text())
    //.then(res=>console.log(res));


  return isAuthenticated && (<button onClick={callprotectedapi}>CALL protected API</button>)

};


export default CallprotectedAPI;