import {
  GET_NOW_PLAYING_MOVIES,
  GET_NOW_PLAYING_MOVIES_FAILED,
  GET_POPULAR_MOVIES,
  GET_POPULAR_MOVIES_FAILED,
} from "..";

const initialState = {
  is_loading: false,
  pop_movies: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        is_loading: false,
        pop_movies: payload,
        error: null,
      };

    case GET_POPULAR_MOVIES_FAILED:
      return {
        ...state,
        is_loading,
        error: payload,
      };

    default:
      return state;
  }
};
