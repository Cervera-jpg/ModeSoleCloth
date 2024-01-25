import React from "react";
import "./Poster.css";
import { Link } from "react-scroll";
import arrow_icon from "../Assets/arrow.png";
import astonishing from "../Assets/Astonishing.png";
import poster_image from "../Assets/poster_image1.png";
import Latest from "../LatestRelease/Latest";

const Poster = () => {
  const handleLatestClick = () => {
    const latestSection = document.getElementById("latestSection");
    if (latestSection) {
      latestSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="poster">
        <div className="poster-left">
          <div>
            <div className="poster-hand-icon">
              <p>Indulge in the</p>
            </div>
            <img src={astonishing} className="astonishing" alt="" />
            <p>A new dimension to style</p>
          </div>
          <button className="poster-latest-btn" onClick={handleLatestClick}>
            Latest Collection
            <img src={arrow_icon} alt="" />
          </button>
        </div>
      </div>

      {}
      <div id="latestSection">
        <Latest />
      </div>
    </div>
  );
};

export default Poster;
