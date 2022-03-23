import React, { useState } from "react";
import useMovies from "./hooks/useMovies";
import LateralBar from "./LateralBar";
import Movie from "./Movie";
import "./styles.css";
import { movies } from "./data/movies";

const MovieList = () => {
  const [localMovies, removeMovie] = useMovies(movies);
  const [filteredMovies, setFilteredMovies] = useState([]);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="container">
            <div className="row">
              {filteredMovies.map((m, k) => (
                <div className="col-12 col-md-4 col-lg-3" key={k}>
                  <Movie info={m} remove={removeMovie} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row">
            <LateralBar
              movies={localMovies.list}
              updateList={setFilteredMovies}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieList;
