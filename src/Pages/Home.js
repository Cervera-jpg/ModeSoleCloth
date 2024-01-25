import React from "react";
import Poster from "../Components/FrontPoster/Poster";
import Advertisement from "../Components/Advertisement/Advertisement";
import Advertisement1 from "../Components/Advertisement/Advertisement1";
import Sale from "../Components/Sale/Sale";
import Email from "../Components/Email/Email";

const Home = () => {
  return (
    <div>
      <Poster />
      <Advertisement />
      <Advertisement1 />
      <Sale />
      <Email />
    </div>
  );
};

export default Home;
