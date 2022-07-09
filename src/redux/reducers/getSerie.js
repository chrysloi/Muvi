import { GET_SERIE, GET_SERIE_FAILED } from "..";

const initialState = {
  is_loading: false,
  serieDetails: {},
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

    default:
      return state;
  }
};
