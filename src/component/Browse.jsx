import React from "react";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies"; // Ensure correct import path
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./secondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
