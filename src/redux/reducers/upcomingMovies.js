import { GET_UPCOMING_MOVIES, GET_UPCOMING_MOVIES_FAILED } from "..";

const initialState = {
  is_loading: false,
  upcoming_movies: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_UPCOMING_MOVIES:
      return {
        ...state,
        is_loading: false,
        upcoming_movies: payload,
        error: null,
      };

    case GET_UPCOMING_MOVIES_FAILED:
      return {
        ...state,
        is_loading,
        error: payload,
      };

    default:
      return state;
  }
};
