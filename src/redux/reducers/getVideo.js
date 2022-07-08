import { GET_VIDEO, GET_VIDEO_FAILED } from "..";

const initialState = {
  is_loading: false,
  video: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VIDEO:
      return {
        ...state,
        video: payload,
      };

    case GET_VIDEO_FAILED:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
