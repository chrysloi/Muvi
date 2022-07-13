import { GET_SERIE, GET_SERIE_FAILED, RESET_SERIE_DETAILS } from "..";

const initialState = {
  is_loading: false,
  serieDetails: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SERIE:
      return {
        ...state,
        is_loading: false,
        serieDetails: payload,
      };

    case GET_SERIE_FAILED:
      return {
        ...state,
        is_loading: false,
        error: payload,
      };

    case RESET_SERIE_DETAILS:
      return {
        ...state,
        is_loading: false,
        serieDetails: [],
      };

    default:
      return state;
  }
};
