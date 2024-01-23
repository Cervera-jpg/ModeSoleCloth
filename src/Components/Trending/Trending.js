import React from "react";
import "./Trending.css";
import Display from "../Display/Display";
import Trending_Display from "../Products/Trending_Display";
const Trending = () => {
  return (
    <div className="popular">
      <h1>TRENDING FITS</h1>
      <hr />
      <div className="popular-item">
        {Trending_Display.map((item, i) => {
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

export default Trending;
