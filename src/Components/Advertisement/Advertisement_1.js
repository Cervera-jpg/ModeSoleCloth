import React from "react";
import "./Advertisement_1.css";
import logo from "../Assets/logo.png";
import model2 from "../Assets/model_2.png";
const Advertisement_1 = () => {
  return (
    <div className="offers1">
      <div className="offers-left1">
        <h1>Newest Releases</h1>
        <h2>Just for You</h2>
        <p>What Are You Waiting For?</p>
        <img src={logo} alt="logo"></img>
      </div>
      <div className="offers-right1">
        <img src={model2} className="model2" alt="" />
      </div>
    </div>
  );
};

export default Advertisement_1;
