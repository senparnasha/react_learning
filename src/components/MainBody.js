import React from "react";
import RestroCard from "./RestroCard";
import resList from "../utils/mockData";
import {useState} from "react"




const MainBody = () => {
const [listOfRestro,setListOfRestro]=useState(resList)

  const handleTopRatedRestroFind=()=>{
   const filteredRestro=listOfRestro.filter((resturants)=>{
return resturants.info.avgRating > 4.5
   })
setListOfRestro(filteredRestro)
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