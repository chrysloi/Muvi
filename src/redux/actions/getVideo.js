import axios from "axios";
import { GET_VIDEO, GET_VIDEO_FAILED } from "..";

const key = "56f1cb38d475f4ac3ef8ad55e0c001f6";

export const GetVideo = (movie_id) => (dispatch) => {
  axios({
    method: "get",
    url: `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${key}`,
  })
    .then((responseData) => {
      const { data } = responseData;
      // console.log(responseData);
      dispatch({
        type: GET_VIDEO,
        payload: data.results,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_VIDEO_FAILED,
        payload: err.message,
      });
    });
};
