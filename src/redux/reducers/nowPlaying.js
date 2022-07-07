import { GET_NOW_PLAYING_MOVIES, GET_NOW_PLAYING_MOVIES_FAILED } from "..";

const initialState = {
  is_loading: false,
  now_playing: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_NOW_PLAYING_MOVIES:
      return {
        ...state,
        is_loading: false,
        now_playing: payload,
        error: null,
      };

    case GET_NOW_PLAYING_MOVIES_FAILED:
      return {
        ...state,
        is_loading,
        error: payload,
      };

    default:
      return { state };
  }
};
