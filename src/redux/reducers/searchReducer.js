import { SEARCHING, SEARCH_FAILED } from "..";

const initialState = {
  is_loading: true,
  search_result: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCHING:
      return {
        ...state,
        is_loading: false,
        search_result: payload,
      };

    case SEARCH_FAILED:
      return {
        ...state,
        is_loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
