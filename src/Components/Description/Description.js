import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Imagine slipping into a garment that effortlessly combines style and
          comfort, transforming your everyday wardrobe into a statement of
          individuality. This cool piece of clothing is a masterful blend of
          cutting-edge design and quality craftsmanship, featuring intricate
          details that catch the eye and elevate your fashion game. Its fabric
          feels like a second skin, providing a luxurious sensation as you move
          through your day with confidence. The attention to detail is
          impeccable, from carefully selected patterns to innovative stitching
          techniques that set this garment apart.
        </p>
        <p>
          Wearing it isn't just about looking good; it's about making a
          statement and embracing the cool, effortless style that sets you apart
          from the crowd.
        </p>
      </div>
    </div>
  );
};

export default Description;
