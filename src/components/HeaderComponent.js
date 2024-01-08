import React from "react";
import logo from "../../logo.jpg";
import {useState} from "react"
import { Link } from "react-router-dom";

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
            <li className="nav-items-title">
              <Link to="/">  Home</Link> 
              </li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>
            <Link to="/cart">Cart</Link>
            </li>
            <button onClick={handleLoginBtn} className="login-btn">{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default HeaderComponent;