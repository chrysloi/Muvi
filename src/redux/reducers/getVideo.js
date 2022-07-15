import { GET_VIDEO, GET_VIDEO_FAILED, RESET_VIDEO } from "..";

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

    case RESET_VIDEO:
      return {
        ...state,
        video: [],
      };

    default:
      return state;
  }
};
