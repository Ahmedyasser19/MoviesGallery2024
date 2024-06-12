import React from "react";
import "./moviecard.css";
import Plus from "/Plus.svg";
import Star from "/Star.svg";
import { NavLink } from "react-router-dom";

const MovieCard = ({ mTitle, mDesc, mRating, mImage }) => {
  return (
    <div className="CardContainer">
      <img
        src={`https://image.tmdb.org/t/p/w500${mImage}`}
        className="bgImage"
      />
      <div className="CardContent">
        <div className="CardUp">
          <div className="Title">{mTitle}</div>
          <div className="Rating">
            <img src={Star} />
            {Math.round(mRating * 10) / 10}
          </div>
        </div>

        <div className="CardDown">
          <div className="CardFlex">
            <p className="CardFlexUp">{mDesc}</p>
          </div>
          <div className="CardFlex FlexContainer">
            <div className="CardAdd">
              <img src={Plus} />
            </div>
            <div className="WatchNowSmallCard">
              <p>watch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
