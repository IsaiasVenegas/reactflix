import React from "react";
import { MovieList } from "./MovieList";
import { LateralBar } from "./LateralBar";

const Home = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>ReactFlix</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <MovieList />
        </div>
        <div className="col">
          <LateralBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
