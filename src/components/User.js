import React from "react";
import { useState, useEffect } from "react";

const User = () => {
    const[userInfo,setUserInfo]=useState("")
  useEffect(() => {
    fetchUser();
  });
  const fetchUser = async () => {
    const data = await fetch("https://api.github.com/users/senparnasha");
    const json = await data.json();
    // console.log(json.login)
    setUserInfo(json)
  };
console.log(userInfo)
  
  return (
    <>
      <div className="user-card">
        <h2>Name:{userInfo.login}</h2>
        <h2>Location: Dhakuria</h2>
        <h2>State: West Bengal</h2>
        <h2>Age:26</h2>
        
      </div>
    </>
  );
};

export default User;
