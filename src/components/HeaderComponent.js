import React from "react";
import  foodlogo from "../../foodlogo .jpg"
import {useState} from "react"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
const [btnName,setBtnName]=useState("Login")
const onlineStatus=useOnlineStatus()
  const handleLoginBtn=()=>{
if(btnName==="Login"){
  setBtnName("Logout")
}else{
  setBtnName("Login")
}
  }
    return (
      <div className="header w-full flex justify-between bg-white shadow-md ">
        <div className=" w-36  ">
          <img className="w-36 my-1 px-2 " src={foodlogo} alt="Logo" />
        </div>
        <div className="">
          <ul className="flex ">
            <li className="px-4 py-3 font-bold text-lg text-slate-600 items-center pt-5 ">
              Online Status: { onlineStatus? (<div className="text-green-400">Online</div>):(<div className="text-red-400">Offline</div>)}</li>
            <li className="px-2 py-3 font-bold text-lg text-slate-600 pt-5">
              <Link to="/">  Home</Link> 
              </li>
            <li className="px-2 py-3 pt-5 font-bold text-lg text-slate-600"><Link to="/about">About Us</Link></li>
            <li className="px-2 py-3 pt-5 font-bold text-lg text-slate-600"><Link to="/contact">Contact Us</Link></li>
            <li className="px-2 py-3 pt-5 font-bold text-lg text-slate-600">
            <Link to="/cart">Cart</Link>
            </li>
            <li className="px-2 py-3 pt-5 font-bold text-lg text-slate-600">
            <Link to="/grocery">Grocery</Link>
            </li>
           
            <button onClick={handleLoginBtn} className="px-6 bg-slate-200 m-6  text-slate-600 font-bold text-lg rounded-md hover:bg-slate-300">{btnName}</button>
           
           
          </ul>
        </div>
      </div>
    );
  };

  export default HeaderComponent;