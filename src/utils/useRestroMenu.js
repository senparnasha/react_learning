import React from "react";
import { useState, useEffect } from "react";

const useRestroMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.510063322506674&lng=88.3788628131151&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestroMenu;
