import React from "react";
import Card from "./Card";
import './Header.css';
import LoginButton from "./LoginButton";
import picture from './MPSCLOGO2.jpg';

const Header = () => {
    return(
        <>
        <div className="Header">
            <ul className="pull-right">
                <li><a href="/contact">Contact</a></li>
                <li><a href="/support">Support</a></li>
            </ul>
        </div>
        <div className="Header-2">
            <ul className="Header-menu">
                <li><img className="logo" src="https://cdn.dribbble.com/users/559871/screenshots/7723075/media/cbba7c2e44f68d3f860e61f9b3b24f7f.png?compress=1&resize=400x300&vertical=top" alt = "MPSC-LOGO"></img> </li>
            </ul>
        </div>
        <Card/>
        </>
    )

}

export default Header;