import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";


const ResturantMenu = () => {
  
  const { resId } = useParams();
  console.log(resId);


 const resInfo=useRestroMenu(resId)
 
  if (resInfo === null) {
    return (
      <>
        <Shimmer />
      </>
    );
  }
  const { name, cuisines, avgRating, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;

  const { card } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card;
  console.log(
    "====",
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  );
  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(",")}</h2>
      <h2>{costForTwoMessage}</h2>
      <h2>{avgRating}</h2>
      <div>
        <h2>Menu</h2>
        <ul>
          {card?.itemCards?.map((item) => {
            return (
              <li key={item.card.info.id}>
                {item.card.info.name}- {"Rs."}
                {item.card.info.price}{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenu;
