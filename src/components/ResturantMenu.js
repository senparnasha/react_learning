import React from "react";
import { useEffect, useState } from "react";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState("");

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5466549&lng=88.3482327&restaurantId=39236&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  };
console.log(resInfo?.cards[0]?.card?.card?.info.name)
  const { name, cuisines, avgRating, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(",")}</h2>
      <h2>{costForTwoMessage}</h2>
      <h2>{avgRating}</h2>

      <div>
        <h2>Menu</h2>
        <ul>
          <li>Biriyani</li>
          <li>Burger</li>
          <li>Fried Chicken</li>
          <li>Golden Prawn</li>
          <li>Chicken Chaap</li>
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenu;
