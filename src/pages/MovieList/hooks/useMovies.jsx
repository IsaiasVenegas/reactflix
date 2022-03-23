import { useState, useEffect } from "react";

/**
 * Load and manage a list of movies
 * @param {Array} storedMovies
 * @returns
 */
const useMovies = (storedMovies) => {
  const [movies, setMovies] = useState({
    loading: false,
    list: [],
  });

  // ComponentDidMount call
  // useEffect(() => {
  //   setMovies({ loading: true, ...movies });
  //   // getAction
  // });

  // If the movie listing has been updated, put it in the local state
  useEffect(() => {
    if (storedMovies.length > 0) {
      setMovies({ loading: false, list: storedMovies });
    }
  }, [storedMovies]);

  // Remove a movie clicking on its trash button
  const removeMovie = (filterFunc) => {
    let actualList = movies.list;
    let updatedList = actualList.filter(filterFunc);
    setMovies({ list: updatedList, loading: false });
  };

  return [movies, removeMovie];
};

export default useMovies;
