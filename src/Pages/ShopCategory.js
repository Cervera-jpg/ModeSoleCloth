import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../shop/ShopContext.js";

const ShopCategory = (props) => {
  const { Product_ID } = useContext(ShopContext);

  // You can use Product_ID in your component logic here if needed

  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
    </div>
  );
};

export default ShopCategory;
