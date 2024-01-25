import React from "react";
import "./Advertisement.css";
import model from "../Assets/model_1.png";
import Trending from "../Trending/Trending";

const Advertisement = () => {
  const handleCheckNowClick = () => {
    const trendingSection = document.getElementById("Trending");
    if (trendingSection) {
      trendingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="offers">
        <div className="offers-left">
          <h1>Exclusive</h1>
          <h2>Offers For You</h2>
          <p>Only on ModeSoleCloth</p>
          <button onClick={handleCheckNowClick}>Check Now</button>
        </div>
        <div className="offers-right">
          <img src={model} className="model1" alt="" />
        </div>
      </div>

      {}
      <div id="Trending">
        <Trending />
      </div>
    </div>
  );
};

export default Advertisement;
