import React from "react";
import "./Latest.css";
import Display from "../Display/Display";
import Latest_Display from "../Products/Latest_Display";
const Latest = () => {
  return (
    <div className="latest">
      <h1>LATEST RELEASES</h1>
      <hr />
      <div className="latest_products">
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
export default Latest;
