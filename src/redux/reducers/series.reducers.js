const initialState = {
  is_loading: false,
  pop_series: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOADING SERIES":
      return {
        ...state,
        is_loading: true,
      };

    case "SERIES SUCCESSFULLY LOADED":
      return {
        ...state,
        is_loading: false,
        pop_series: payload,
        error: null,
      };

    case "SERIES FAILED TO LOAD":
      return {
        ...state,
        error: payload,
      };

    default:
      return { state };
  }
};
