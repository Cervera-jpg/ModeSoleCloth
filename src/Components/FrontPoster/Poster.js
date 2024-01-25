import React from "react";
import "./Poster.css";
import arrow_icon from "../Assets/arrow.png";
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
    <div className="poster-container">
      <div className="poster">
        <div className="poster-left">
          <div>
            <div className="poster-hand-icon">
              <p>Welcome to our</p>
            </div>
            <p>Clothing Store</p>
          </div>
          <button className="poster-latest-btn" onClick={handleLatestClick}>
            Latest Collection
            <img src={arrow_icon} alt="" />
          </button>
        </div>
        {/* Add the image to the right side */}
        <div className="poster-right">
          <img src={poster_image} alt="" />
        </div>
      </div>
      <div id="latestSection">
        <Latest />
      </div>
    </div>
  );
};

export default Poster;
