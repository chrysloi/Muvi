import {
  GET_SINGLE_MOVIE,
  GET_SINGLE_MOVIE_FAILED,
  RESET_MOVIE_DETAILS,
} from "..";

const initialState = {
  is_loading: true,
  movieDetails: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SINGLE_MOVIE:
      return {
        ...state,
        is_loading: false,
        movieDetails: payload,
      };

    case RESET_MOVIE_DETAILS:
      return {
        ...state,
        is_loading: false,
        movieDetails: [],
      };

    case GET_SINGLE_MOVIE_FAILED:
      return {
        ...state,
        is_loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
