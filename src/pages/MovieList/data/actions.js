import { LOADED_MOVIES, LOADING_MOVIES_ERROR } from "./reducers";
import { movies$ } from "./movies";

export const recoverMovieList = () => {
  return (dispatch, getState) =>
    movies$
      .then((response) => {
        return dispatch({ type: LOADED_MOVIES, data: response });
      })
      .catch(() => {
        return dispatch({
          type: LOADING_MOVIES_ERROR,
          data: "An error has occurred. Try again",
        });
      });
};
