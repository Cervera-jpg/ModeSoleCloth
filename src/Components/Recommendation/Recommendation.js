import React from "react";
import "./Recommendation.css";
import Display from "../Display/Display";
import Latest_Display from "../Products/Latest_Display";
const RelatedProducts = () => {
  return (
    <div className="recommendation">
      <h1>Recommendation</h1>
      <hr />
      <div className="recommendation_product">
        {Latest_Display.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
