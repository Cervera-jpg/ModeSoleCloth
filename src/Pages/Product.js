import React, { useContext } from "react";
import "./CSS/Product.css";
import { useParams } from "react-router";
import Directory from "../Components/Directory/Directory";
import { ShopContext } from "../shop/ShopContext";
import Showcase from "../Components/Product_Showcase/Showcase";
import Description from "../Components/Description/Description";
import Recommendation from "../Components/Recommendation/Recommendation";

const Product = () => {
  const { Product_ID } = useContext(ShopContext);
  const { productId } = useParams();
  const product = Product_ID.find((e) => e.id === Number(productId));
  return (
    <div className="product">
      <Directory product={product} />
      <Showcase product={product} />
      <Description />
      <Recommendation />
    </div>
  );
};

export default Product;
