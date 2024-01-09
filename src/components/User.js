import React from "react";
import {useState} from"react"
  


const User=()=>{
    const [count,setCount]=useState(0)
    const handleIncrease=()=>{
      const x=count+1
        setCount(x)
    }
    return(
        <>
        <div className="user-card">
        <h2>Name: Parnasha</h2>
        <h2>Location: Dhakuria</h2>
        <h2>State: West Bengal</h2>
        <h2>Age:26</h2>
        <h1>Count:{count}</h1>
        <button onClick={handleIncrease}>Count Increase</button>
        </div>
        </>
    )
}

export default User;