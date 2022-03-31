import React from "react";
import './Form.css';
import LoginButton from "./LoginButton";

const Form = () => {
return (
    <div class="bg-img">
    <form className="container">

     <label><b>Email</b></label>
     <input type="text" placeholder="Enter Email" name="email"></input>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw"></input>
    <button type="submit" class="btn">Login</button>
    <p className="or">OR</p>
    <button type="submit" class="btn-2">Sign-up</button>
    <p className="or">OR</p>
    <LoginButton/>
    </form>
    </div>
)
}
export default Form;