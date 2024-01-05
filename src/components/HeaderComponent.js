import React from "react";
import logo from "../../logo.jpg";
import {useState} from "react"

const HeaderComponent = () => {
const [btnName,setBtnName]=useState("Login")
  const handleLoginBtn=()=>{
if(btnName==="Login"){
  setBtnName("Logout")
}else{
  setBtnName("Login")
}
  }
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo" />;
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button onClick={handleLoginBtn} className="login-btn">{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default HeaderComponent;