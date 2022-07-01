const initialState = {
  is_loading: false,
  pop_movies: [],
  top_rated: [],
  now_playing: [],
  pop_series: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOADING NOW PLAYING MOVIES":
      return {
        ...state,
        is_loading: true,
      };

    case "NOW PLAYING MOVIES SUCCESSFULLY LOADED":
      return {
        ...state,
        is_loading: false,
        now_playing: payload,
        error: null,
      };

    case "NOW PLAYING MOVIES FAILED TO LOAD":
      return {
        ...state,
        is_loading,
        error: payload,
      };

    case "LOADING TOP RATED MOVIES":
      return {
        ...state,
        is_loading: true,
      };

    case "TOP RATED MOVIES SUCCESSFULLY LOADED":
      return {
        ...state,
        is_loading: false,
        top_rated: payload,
        error: null,
      };

    case "TOP RATED MOVIES FAILED TO LOAD":
      return {
        ...state,
        is_loading,
        error: payload,
      };

    case "LOADING POPULAR MOVIES":
      return {
        ...state,
        is_loading: true,
      };

    case "POPULAR MOVIES SUCCESSFULLY LOADED":
      return {
        ...state,
        is_loading: false,
        pop_movies: payload,
        error: null,
      };

    case "POPULAR MOVIES FAILED TO LOAD":
      return {
        ...state,
        is_loading,
        error: payload,
      };
    case "GET_SINGLE_MOVIE":
      return {
        ...state,
        movieDetails: payload,
      };

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
