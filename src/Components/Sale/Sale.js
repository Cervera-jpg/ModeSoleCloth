import React from "react";
import Display from "../Display/Display";
import "./Sale.css";
import Sale_Display from "../Products/Sale_Display";
const Sale = () => {
  return (
    <div className="sale">
      <h1>LATEST RELEASES</h1>
      <hr />
      <div className="sale_products">
        {Sale_Display.map((item, i) => {
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

export default Sale;
