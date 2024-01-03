import React from "react";
import RestroCard from "./RestroCard";
import resList from "../utils/mockData";




const MainBody = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="restro-container">
          {resList.map((eachRestro) => {
            console.log("====>", eachRestro);
            return (
              <RestroCard key={eachRestro.info.id} restroData={eachRestro} />
            );
          })}
        </div>
      </div>
    );
  };

  export default MainBody;