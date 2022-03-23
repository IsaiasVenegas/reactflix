import { useState, useEffect } from "react";

const useMovies = (storedMovies) => {
  const [movies, setMovies] = useState({
    loading: false,
    list: [],
  });
  // useEffect(() => {
  //   setMovies({ loading: true, ...movies });
  //   // getAction
  // });

  useEffect(() => {
    if (storedMovies.length > 0) {
      setMovies({ loading: false, list: storedMovies });
    }
  }, [storedMovies]);

  const removeMovie = (filterFunc) => {
    let actualList = movies.list;
    let updatedList = actualList.filter(filterFunc);
    setMovies({ list: updatedList, loading: false });
  };

  return [movies, removeMovie];
};

export default useMovies;
