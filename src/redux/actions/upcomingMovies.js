import axios from "axios";
import { GET_UPCOMING_MOVIES, GET_UPCOMING_MOVIES_FAILED } from "..";

export const Upcoming = () => {
  return async (dispatch) => {
    await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/upcoming?api_key=56f1cb38d475f4ac3ef8ad55e0c001f6`,
    })
      .then((responseData) => {
        const { data } = responseData;
        // console.log(responseData);
        dispatch({
          type: GET_UPCOMING_MOVIES,
          payload: data.results,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: GET_UPCOMING_MOVIES_FAILED,
          payload: err.message,
        });
      });
  };
};
