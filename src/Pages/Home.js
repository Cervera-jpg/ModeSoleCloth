import React from "react";
import Poster from "../Components/FrontPoster/Poster";
import Trending from "../Components/Trending/Trending";
import Footer from "../Components/Footer/Footer";
import Latest from "../Components/LatestRelease/Latest";

const Home = () => {
  return (
    <div>
      <Poster />
      <Trending />
      <Latest />
      <Footer />
    </div>
  );
};

export default Home;
