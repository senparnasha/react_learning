import React from "react";
import RestroCard from "./RestroCard";

import {useState,useEffect} from "react"
import Shimmer from "./Shimmer";







const MainBody = () => {
const [listOfRestro,setListOfRestro]=useState([])

useEffect(()=>{
  console.log("useEffect")
  fetchData()
},[])

const fetchData= async()=>{
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5466549&lng=88.3482327&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
const json=await data.json()
setListOfRestro(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}
 const handleTopRatedRestroFind=()=>{
   const filteredRestro=listOfRestro.filter((resturants)=>{
return resturants.info.avgRating > 4.5
   })
setListOfRestro(filteredRestro)
  }

if(listOfRestro.length===0){
  return(<><Shimmer/></>)
}

    return (
      <div className="body">
        <div className="top-rated-restro">
          <button className="top-rated-restro-btn"
          onClick={handleTopRatedRestroFind}
          
          >Top Rated Resturants</button>
        </div>
        <div className="restro-container">
          {listOfRestro.map((eachRestro) => {
           
            return (
              <RestroCard key={eachRestro.info.id} restroData={eachRestro} />
            );
          })}
        </div>
      </div>
    );
  };

  export default MainBody;