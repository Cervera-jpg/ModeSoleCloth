import React from "react";
import "./Advertisement.css";
import model from "../Assets/model_1.png";

const Advertisement = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h2>Offers For You</h2>
        <p>Only on ModeSoleCloth</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={model} className="model1" alt="" />
      </div>
    </div>
  );
};

export default Advertisement;
