import axios from "axios";
import { GET_POPULAR_MOVIES, GET_POPULAR_MOVIES_FAILED } from "../";

const key = "";

export const PopularMovies = () => {
  return async (dispatch) => {
    await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/popular?api_key=56f1cb38d475f4ac3ef8ad55e0c001f6`,
    })
      .then((responseData) => {
        const { data } = responseData;
        dispatch({
          type: GET_POPULAR_MOVIES,
          payload: data.results,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: GET_POPULAR_MOVIES_FAILED,
          payload: err.message,
        });
      });
  };
};
