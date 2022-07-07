import { GET_POPULAR_SERIES, GET_POPULAR_SERIES_FAILED } from "../index";

const initialState = {
  is_loading: false,
  pop_series: [],
  error: null,
};

export default function popularSeries(state = initialState, { type, payload }) {
  switch (type) {
    case GET_POPULAR_SERIES:
      return {
        ...state,
        is_loading: false,
        pop_series: payload,
        error: null,
      };

    case GET_POPULAR_SERIES_FAILED:
      return {
        ...state,
        error: payload,
      };

    default:
      return { state };
  }
}
