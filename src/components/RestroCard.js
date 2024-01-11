import React from "react";
import { CDN_URL } from "../utils/constants";
import "../../index.css";

const RestroCard = (props) => {
  const restroData = props;
  // console.log(restroData?.restroData?.info);
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    locality,
    sla,
  } = restroData?.restroData?.info;
  const { slaString } = sla || {};
  return (
    <div className="res-card w-56 p-3 rounded-md bg-slate-100 m-3 hover:bg-slate-200">
      <img
        className=" rounded-md "
        alt="res-card-image"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="text-xl font-bold text-slate-600">{name}</div>

      <div className="text-md font-bold text-slate-500">
        {avgRating}<span>*</span>
        <span style={{ marginLeft: "5px" }}>.{slaString}</span>
      </div>
      <div className="text-sm font-semibold text-slate-500">{cuisines.join(", ")}</div>
      <div className="text-md font-semibold text-slate-600">{costForTwo}</div>
      <div className="text-sm font-semibold text-slate-500">{locality}</div>
    </div>
  );
};

export default RestroCard;
