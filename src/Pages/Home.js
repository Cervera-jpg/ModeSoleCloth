import React from "react";
import Poster from "../Components/FrontPoster/Poster";
import Trending from "../Components/Trending/Trending";
import Footer from "../Components/Footer/Footer";
import Latest from "../Components/LatestRelease/Latest";
import Advertisement from "../Components/Advertisement/Advertisement";

const Home = () => {
  return (
    <div>
      <Poster />
      <Trending />
      <Advertisement />
      <Latest />
      <Footer />
    </div>
  );
};

export default Home;
