import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.jpg";
import biriyani from "./biriyani.png"

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

const RestroCard = () => {
  return (
    <div className="res-card">
        <img className="card-image" alt="res-card-image" src={biriyani}/>
      <h3>Meghna Food</h3>
      <h4>Biriyani, North Indian, Asian</h4>
      <h4>3.4 stars</h4>
      <h4>25 minutes</h4>


    </div>
  );
};

const MainBody = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />

      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
     <MainBody/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
