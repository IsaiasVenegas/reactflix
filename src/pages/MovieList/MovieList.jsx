import React, { useMemo } from "react";
import { Spinner } from "reactstrap";
import useMovies from "./hooks/useMovies";
import LateralBar from "./LateralBar";
import Movie from "./Movie";
import "./styles.css";
const defaultList = [
  {
    id: "1",
    title: "Oceans 8",
    category: "Comedy",
    likes: 4,
    dislikes: 1,
  },
  {
    id: "2",
    title: "Midnight Sun",
    category: "Comedy",
    likes: 2,
    dislikes: 0,
  },
  {
    id: "3",
    title: "Les indestructibles 2",
    category: "Animation",
    likes: 3,
    dislikes: 1,
  },
  {
    id: "4",
    title: "Sans un bruit",
    category: "Thriller",
    likes: 6,
    dislikes: 6,
  },
  {
    id: "5",
    title: "Creed II",
    category: "Drame",
    likes: 16,
    dislikes: 2,
  },
  {
    id: "6",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 11,
    dislikes: 3,
  },
  {
    id: "7",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 12333,
    dislikes: 32,
  },
  {
    id: "8",
    title: "Seven",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
  },
  {
    id: "9",
    title: "Inception",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
  },
  {
    id: "10",
    title: "Gone Girl",
    category: "Thriller",
    likes: 22,
    dislikes: 12,
  },
];
const MovieList = (props) => {
  const [movies, removeMovies] = useMovies(defaultList);
  const categories = useMemo(
    () => [...new Set(movies.list.map((m, k) => m.category))],
    [movies.list]
  );
  return (
    <div className="container">
      {movies.loading ? (
        <Spinner />
      ) : (
        <div className="row">
          <div className="col">
            <div className="container">
              <div className="row">
                {movies.list.map((m, k) => (
                  <div className="col-12 col-md-4 col-lg-3" key={k}>
                    <Movie info={m} remove={removeMovies} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="row">
              <LateralBar categories={categories} filter={removeMovies} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default MovieList;
