import React, { useContext, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../shop/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Display from "../Components/Display/Display";

const ShopCategory = (props) => {
  const { Product_ID } = useContext(ShopContext);
  const [visibleProducts, setVisibleProducts] = useState(
    props.initialVisible || 4
  ); // Initial number of visible products

  const loadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4); // Increase the number of visible products by 4
  };

  const filteredProducts = Product_ID.filter(
    (item) => props.category === item.category
  );

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{visibleProducts}</span> out of{" "}
          {filteredProducts.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.slice(0, visibleProducts).map((item, i) => (
          <Display
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      {visibleProducts < filteredProducts.length && (
        <button className="shopcategory-loadmore" onClick={loadMore}>
          Explore More
        </button>
      )}
    </div>
  );
};

export default ShopCategory;
