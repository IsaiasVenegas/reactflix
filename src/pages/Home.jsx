import React from "react";
import { MovieList } from "./MovieList";

/**
 * Display a header and body component
 * @param {*} props
 * @returns
 */
const Home = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>ReactFlix</h1>
        </div>
      </div>
      <MovieList />
    </div>
  );
};

export default Home;
