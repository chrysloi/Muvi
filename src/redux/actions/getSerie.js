import axios from "axios";
import { GET_SERIE, GET_SERIE_FAILED } from "../";

export const Serie = (tv_id) => {
  return async (dispatch) => {
    await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/tv/${tv_id}?api_key=56f1cb38d475f4ac3ef8ad55e0c001f6`,
    })
      .then((responseData) => {
        const { data } = responseData;
        dispatch({
          type: GET_SERIE,
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: GET_SERIE_FAILED,
          payload: err.message,
        });
      });
  };
};
