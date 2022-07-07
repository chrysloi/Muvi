import { GET_LATEST_MOVIES, GET_LATEST_MOVIES_FAILED } from "..";

const initialState = {
  is_loading: false,
  latest_movies: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LATEST_MOVIES:
      return {
        ...state,
        is_loading: false,
        latest_movies: payload,
        error: null,
      };

    case GET_LATEST_MOVIES_FAILED:
      return {
        ...state,
        is_loading,
        error: payload,
      };

    default:
      return { state };
  }
};
