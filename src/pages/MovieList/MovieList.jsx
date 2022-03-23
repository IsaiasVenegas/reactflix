import React, { useState } from "react";
import useMovies from "./hooks/useMovies";
import LateralBar from "./LateralBar";
import Movie from "./Movie";
import Pagination from "./Pagination";
import { usePagination } from "./hooks";
import { Spinner } from "reactstrap";
import "./styles.css";
import { movies } from "./movies";

const MovieList = () => {
  const [localMovies, removeMovie, manageLike] = useMovies(() => {}, []);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [pagination, setPage, setPageSize] = usePagination(filteredMovies);
  return (
    <div className="container" style={{ textAlign: "center" }}>
      {localMovies.loading ? (
        <Spinner />
      ) : localMovies.list.length > 0 ? (
        <div className="row">
          <div className="col">
            <div className="container">
              <div className="row">
                {filteredMovies
                  .slice(
                    pagination.page * pagination.page_size,
                    (pagination.page + 1) * pagination.page_size
                  )
                  .map((m) => (
                    <div className="col-12 col-md-4 col-lg-3" key={m.id}>
                      <Movie
                        info={m}
                        remove={removeMovie}
                        update={manageLike}
                      />
                    </div>
                  ))}
              </div>
              <div className="row">
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
      ) : (
        <p>Movies not found</p>
      )}
    </div>
  );
};
export default MovieList;
