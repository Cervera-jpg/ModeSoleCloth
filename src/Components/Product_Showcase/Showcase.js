import React, { useContext } from "react";
import "./Showcase.css";
import star_icon from "../Assets/star.png";
import nostar_icon from "../Assets/no_star.png";
import { ShopContext } from "../../shop/ShopContext";

const Showcase = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="showcase">
      <div className="showcase-left">
        <div className="showcase-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="showcase-img">
          <img className="showcase-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="showcase-right">
        <h1>{product.name}</h1>
        <div className="showcase-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={nostar_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="showcase-right-prices">
          <div className="showcase-right-price-old">${product.old_price}</div>
          <div className="showcase-right-price-new">${product.new_price}</div>
        </div>
        <div className="showcase-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="showcase-right-size">
          <h1>Select Size</h1>
          <div className="showcase-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXl</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="showcase-right-category">
          <span>Category :</span>Women , T-Shirt, Crop Top
        </p>
        <p className="showcase-right-category">
          <span>Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default Showcase;
