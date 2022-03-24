export const LOADING_MOVIES = "LOADING_MOVIES";
export const LOADED_MOVIES = "LOADED_MOVIES";
export const LOADING_MOVIES_ERROR = "LOADING_MOVIES_ERROR";
export const LOADING_MOVIES_RESET = "LOADING_MOVIES_RESET";

const initialGeneralState = {
  list: [],
  errors: [],
  loading: false,
};

export function movies(state = initialGeneralState, action) {
  switch (action.type) {
    case LOADING_MOVIES:
      return { list: [], errors: [], loading: true };
    case LOADED_MOVIES:
      return {
        list: action.data,
        errors: [],
        loading: false,
      };
    case LOADING_MOVIES_ERROR:
      return {
        list: [],
        errors: [...action.data],
        loading: false,
      };
    case LOADING_MOVIES_RESET:
      return { ...initialGeneralState };

    default:
      return state;
  }
}
