import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MContainer from "./MContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MContainer />
      <SecondaryContainer />
      {/*
          - main container
            - movie background
            - movie title
          - secondary container
            - Movie List *n
              - cards * n
         */}
    </div>
  );
};

export default Browse;
