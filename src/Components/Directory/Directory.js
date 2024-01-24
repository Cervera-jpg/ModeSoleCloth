import React from "react";
import "./Directory.css";
import arrow_icon from "../Assets/arrow_icon.png";

const Directory = (props) => {
  const { product } = props;
  return (
    <div className="directory">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{" "}
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};
export default Directory;
