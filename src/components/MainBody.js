import React from "react";
import RestroCard from "./RestroCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const MainBody = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("body rendered");

  useEffect(() => {
    console.log("useEffect");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5466549&lng=88.3482327&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log("===========>>>>>",json?.data);
    setListOfRestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const handleTopRatedRestroFind = () => {
    const filteredRestro = listOfRestro.filter((resturants) => {
      return resturants.info.avgRating > 4.5;
    });
    setFilteredRestro(filteredRestro);
  };
  const handleSearch = () => {
    const filteredRestro = listOfRestro.filter((restro) => {
      return restro.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestro(filteredRestro);
  };

const onlineStatus=useOnlineStatus()
console.log(onlineStatus)
if (onlineStatus === false) {
  return <h1>Looks like you are offline!! Check your internet connection;</h1>;
}



return listOfRestro?.length === 0 ? (
    <>
      <Shimmer />
    </>
  ) : (
    <div className="body">
      <div className="top-rated-restro">
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Search here"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button
          className="top-rated-restro-btn"
          onClick={handleTopRatedRestroFind}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="restro-container">
        {filteredRestro.map((eachRestro) => {
          return (
            <Link key={eachRestro.info.id}  to={"/resturants/"+eachRestro.info.id}  ><RestroCard restroData={eachRestro} /></Link>
          );
        })}
      </div>
    </div>
  );
};

export default MainBody;
