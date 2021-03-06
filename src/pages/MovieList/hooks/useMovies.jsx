import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

/**
 * Load and manage a list of movies
 * @param {Function} getMovies
 * @param {Array} storedMovies
 * @returns
 */
const useMovies = (getMovies, storedMovies) => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState({
    loading: false,
    list: [],
  });

  //ComponentDidMount call
  useEffect(() => {
    setMovies({ loading: true, list: [] });
    dispatch(getMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //If the movie listing has been updated, put it in the local state
  useEffect(() => {
    if (storedMovies.length > 0) {
      setMovies({ loading: false, list: storedMovies });
    }
  }, [storedMovies]);

  // Remove a movie clicking on its trash button
  const removeMovie = (filterFunc) => {
    let updatedList = movies.list.filter(filterFunc);
    setMovies({ list: updatedList, loading: false });
  };

  // Increase/decrease a like/dislike count of a movie clicking on its button
  const manageLike = (movie, like, up) => {
    let copyList = [...movies.list];
    let indexMovie = copyList.indexOf(movie);
    like
      ? up
        ? (copyList[indexMovie].likes += 1)
        : (copyList[indexMovie].likes -= 1)
      : up
      ? (copyList[indexMovie].dislikes += 1)
      : (copyList[indexMovie].dislikes -= 1);
    setMovies({ list: copyList, loading: false });
  };

  return [movies, removeMovie, manageLike];
};

export default useMovies;
