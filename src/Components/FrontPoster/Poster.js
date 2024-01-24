import React from "react";
import "./Poster.css";
import arrow_icon from "../Assets/arrow.png";
import astonishing from "../Assets/Astonishing.png";
import poster_image from "../Assets/poster_image1.png";

const Poster = () => {
  return (
    <div className="poster">
      <div className="poster-left">
        <div>
          <p>Indulge in the</p>
          <div className="astonishing">
            <img src={astonishing} className="astonishing" alt="" />
          </div>
          <p>A new dimension to style</p>
        </div>
        <div className="poster-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Poster;
