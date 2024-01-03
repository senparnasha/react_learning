import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import HeaderComponent from "./components/HeaderComponent";
import MainBody from "./components/MainBody";







const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <MainBody />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
