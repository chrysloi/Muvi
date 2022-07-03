const initialState = {
  is_loading: false,
  video_id: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOADING_VIDEO":
      return {
        ...state,
        is_loading: true,
      };
    case "VIDEO_SUCCESSFULLY_LOADED":
      return {
        ...state,
        video_id: payload,
      };
    case "VIDEO_FAILED_TO_LOAD":
      return {
        ...state,
        error: payload,
      };

    default:
      return { state };
  }
};
