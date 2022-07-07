import axios from "axios";
import { GET_POPULAR_SERIES, GET_POPULAR_SERIES_FAILED } from "..";

const key = "56f1cb38d475f4ac3ef8ad55e0c001f6";

export const PopularSeries = () => {
  return async (dispatch) => {
    await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/tv/popular?api_key=${key}`,
    })
      .then((responseData) => {
        const { data } = responseData;
        console.log(responseData);
        dispatch({
          type: GET_POPULAR_SERIES,
          payload: data.results,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: GET_POPULAR_SERIES_FAILED,
          payload: err.message,
        });
      });
  };
};
