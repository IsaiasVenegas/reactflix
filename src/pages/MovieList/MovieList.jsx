import React, { useState } from "react";
import useMovies from "./hooks/useMovies";
import LateralBar from "./LateralBar";
import Movie from "./Movie";
import Pagination from "./Pagination";
import { usePagination } from "./hooks";
import "./styles.css";
import { movies } from "./movies";

const MovieList = () => {
  const [localMovies, removeMovie, manageLike] = useMovies(() => {}, movies);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [pagination, setPage, setPageSize] = usePagination();
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="container">
            <div className="row">
              {filteredMovies
                .slice(
                  pagination.page * pagination.page_size,
                  (pagination.page + 1) * pagination.page_size
                )
                .map((m, k) => (
                  <div className="col-12 col-md-4 col-lg-3" key={k}>
                    <Movie info={m} remove={removeMovie} update={manageLike} />
                  </div>
                ))}
              <Pagination
                count={filteredMovies.length}
                pageSize={pagination.page_size}
                page={pagination.page}
                setStatePage={setPage}
              />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row">
            <LateralBar
              movies={localMovies.list}
              updateList={setFilteredMovies}
              changeSize={setPageSize}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieList;
