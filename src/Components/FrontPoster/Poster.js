import React from "react";
import "./Poster.css";
import arrow_icon from "../Assets/arrow.png";
import astonishing from "../Assets/Astonishing.png";
import poster_image from "../Assets/poster_image.png";

const Poster = () => {
  return (
    <div className="poster">
      <div className="poster-left">
        <div>
          <div className="poster-hand-icon">
            <p>Indulge in the</p>
          </div>
          <img src={astonishing} className="extra" alt="extra-pic" />
          <p>A new dimension to style</p>
        </div>
        <div className="poster-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="poster-right">
        <img src={poster_image} alt="" />
      </div>
    </div>
  );
};

export default Poster;
