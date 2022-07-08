import {
  GET_NOW_PLAYING_MOVIES,
  GET_NOW_PLAYING_MOVIES_FAILED,
  GET_SINGLE_MOVIE,
  GET_SINGLE_MOVIE_FAILED,
} from "..";

const initialState = {
  is_loading: false,
  movieDetails: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SINGLE_MOVIE:
      return {
        ...state,
        is_loading,
        error: payload,
      };

    case GET_SINGLE_MOVIE_FAILED:
      return {
        ...state,
        movieDetails: payload,
      };

    default:
      return state;
  }
};
