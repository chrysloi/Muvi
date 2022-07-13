import { SEARCHING, SEARCH_DONE, SEARCH_FAILED } from "..";

const initialState = {
  is_loading: false,
  search_result: [],
  searched: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCHING:
      return {
        ...state,
        is_loading: true,
        searched: false,
      };

    case SEARCH_DONE:
      return {
        ...state,
        is_loading: false,
        searched: true,
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
