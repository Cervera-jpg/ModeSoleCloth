import React, { useContext, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../shop/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Display from "../Components/Display/Display";

const ShopCategory = (props) => {
  const { Product_ID } = useContext(ShopContext);
  const [displayCount, setDisplayCount] = useState(12); // Initially display 12 products

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 12); // Increase the display count by 12 when "Explore More" is clicked
  };

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{displayCount}</span> out of {Product_ID.length}{" "}
          products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {Product_ID.slice(0, displayCount).map((item, i) => {
          if (props.category === item.category) {
            return (
              <Display
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      {displayCount < Product_ID.length && (
        <div className="shopcategory-loadmore" onClick={handleLoadMore}>
          Explore More
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
