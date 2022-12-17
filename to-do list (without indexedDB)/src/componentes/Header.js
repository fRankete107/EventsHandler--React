import React from "react";
import logo from "../imagenes/logo.png";

function Header() {
    return(
        <div className='logo'>
        <img className='logo-img' alt='logo' src={logo} />
        </div>
    );
};

export default Header;