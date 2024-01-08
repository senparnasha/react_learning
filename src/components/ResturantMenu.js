import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId}=useParams()
  console.log(resId)

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    console.log("useEffect", resId);
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.510063322506674&lng=88.3788628131151&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
    // const data = await fetch(MENU_URL+resId);
    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return (
      <>
        <Shimmer />
      </>
    );
  }
  const { name, cuisines, avgRating, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;

  const {card} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card;
  console.log("====", resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(",")}</h2>
      <h2>{costForTwoMessage}</h2>
      <h2>{avgRating}</h2>
      <div>
        <h2>Menu</h2>
        <ul>
            {card?.itemCards?.map((item)=>{
             return <li key={item.card.info.id}>{item.card.info.name}- {"Rs."}{item.card.info.price} </li> 
            })}
        
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenu;
