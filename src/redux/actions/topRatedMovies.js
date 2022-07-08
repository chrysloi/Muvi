import axios from "axios";
import { GET_TOP_RATED_MOVIES, GET_TOP_RATED_MOVIES_FAILED } from "../";

const key = "";

export const TopRatedMovies = () => {
  return async (dispatch) => {
    await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=56f1cb38d475f4ac3ef8ad55e0c001f6`,
    })
      .then((responseData) => {
        const { data } = responseData;
        // console.log(responseData);
        dispatch({
          type: GET_TOP_RATED_MOVIES,
          payload: data.results,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: GET_TOP_RATED_MOVIES_FAILED,
          payload: err.message,
        });
      });
  };
};
