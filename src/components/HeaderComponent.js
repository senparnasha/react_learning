import React from "react";
import logo from "../../logo.jpg";


const HeaderComponent = () => {
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
          </ul>
        </div>
      </div>
    );
  };

  export default HeaderComponent;