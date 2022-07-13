import axios from "axios";
import {
  GET_SINGLE_MOVIE,
  GET_SINGLE_MOVIE_FAILED,
  RESET_MOVIE_DETAILS,
} from "..";

const key = "56f1cb38d475f4ac3ef8ad55e0c001f6";

export const GetSingleMovie = (id) => (dispatch) => {
  axios({
    method: "get",
    url: `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`,
  })
    .then((responseData) => {
      const { data } = responseData;
      dispatch({
        type: GET_SINGLE_MOVIE,
        payload: data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_SINGLE_MOVIE_FAILED,
        payload: err.message,
      });
    });
};

export const ResetSingleMovie = () => (dispatch) => {
  dispatch({
    type: RESET_MOVIE_DETAILS,
  });
};
