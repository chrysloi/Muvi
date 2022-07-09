import axios from "axios";
import { SEARCHING, SEARCH_FAILED } from "..";

export const Searching = (key_word) => (dispatch) => {
  axios({
    method: "get",
    url: `https://api.themoviedb.org/3/search/multi?api_key=56f1cb38d475f4ac3ef8ad55e0c001f6&language=en-US&query=${key_word}&include_adult=false`,
  })
    .then((responseData) => {
      const { data } = responseData;
      dispatch({
        type: SEARCHING,
        payload: data.results,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: SEARCH_FAILED,
        payload: error,
      });
    });
};
