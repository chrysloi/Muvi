import { GET_TOP_RATED_MOVIES, GET_TOP_RATED_MOVIES_FAILED } from "..";

const initialState = {
  is_loading: true,
  top_rated: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TOP_RATED_MOVIES:
      return {
        ...state,
        is_loading: false,
        top_rated: payload,
      };

    case GET_TOP_RATED_MOVIES_FAILED:
      return {
        ...state,
        is_loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
