import React from "react";
import Poster from "../Components/FrontPoster/Poster";
import Trending from "../Components/Trending/Trending";
import Footer from "../Components/Footer/Footer";
import Latest from "../Components/LatestRelease/Latest";
import Advertisement from "../Components/Advertisement/Advertisement";
import Advertisement_1 from "../Components/Advertisement/Advertisement_1";
import Sale from "../Components/Sale/Sale";

const Home = () => {
  return (
    <div>
      <Poster />
      <Trending />
      <Advertisement />
      <Latest />
      <Advertisement_1 />
      <Sale />
    </div>
  );
};

export default Home;
