import React from "react";
import {CDN_URL} from "../utils/constants"
import "../../index.css"

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
    <div className="res-card">
      <img
        className="card-image"
        alt="res-card-image"
        src={
           CDN_URL +
          cloudinaryImageId
        }
      />
      <div className="title">{name}</div>

      <div className="sub-title">
        {avgRating}
        <span style={{ marginLeft: "5px" }}>.{slaString}</span>
      </div>
      <div className="res-info">{cuisines.join(", ")}</div>
      <div className="res-info">{costForTwo}</div>

      <div className="res-info">{locality}</div>
    </div>
  );
};

export default RestroCard;
