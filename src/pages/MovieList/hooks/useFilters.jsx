import { useState, useEffect, useMemo } from "react";

/**
 * Manage filtering of movies using their categories
 * @param {Array} movies
 * @param {Function} updateList
 * @returns
 */
const useFilters = (movies, updateList) => {
  // Get a list of categories from the movie list
  // Update if the list has changed
  const categories = useMemo(
    () => [...new Set(movies.map((m, k) => m.category))],
    [movies]
  );

  // Active filters by clicking on them
  const [activeFilters, setActiveFilters] = useState([]);

  // Add a category as a filter. If it is already in the list, remove it.
  const addFilter = (category) => {
    activeFilters.indexOf(category) === -1
      ? setActiveFilters([...activeFilters, category])
      : setActiveFilters(activeFilters.filter((e) => e !== category));
  };

  // Update displayed movies using the active filters
  // Display all movies if the list has no filters
  useEffect(() => {
    let filteredMovies = movies;
    if (activeFilters.length > 0) {
      filteredMovies = movies.filter(
        (m) => activeFilters.indexOf(m.category) !== -1
      );
    }
    updateList(filteredMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies, activeFilters]);

  // Update filters if a category has disappeared
  useEffect(() => {
    let updatedFilters = activeFilters.filter(
      (c) => categories.indexOf(c) !== -1
    );
    setActiveFilters(updatedFilters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  return [categories, activeFilters, addFilter];
};

export default useFilters;
