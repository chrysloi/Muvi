import axios from "axios";

const key = "56f1cb38d475f4ac3ef8ad55e0c001f6";

export const GetVideoId = (movie_id) => (dispatch) => {
  dispatch({ type: "LOADING_VIDEO" });

  axios({
    method: "get",
    url: `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${key}`,
  })
    .then((responseData) => {
      const { data } = responseData;
      // console.log(responseData);
      dispatch({
        type: "VIDEO_SUCCESSFULLY_LOADED",
        payload: data.results,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: "VIDEO_FAILED_TO_LOAD",
        payload: err.message,
      });
    });
};
