import axios from "axios";
import { GET_NOW_PLAYING_MOVIES, GET_NOW_PLAYING_MOVIES_FAILED } from "../";

const key = "56f1cb38d475f4ac3ef8ad55e0c001f6";

export const NowPlayingMovies = () => {
  return async (dispatch) => {
    // try {
    //   const { data } = await axios.get(
    //     `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`
    //   );
    //   if (data) {
    //     dispatch({
    //       type: GET_NOW_PLAYING_MOVIES,
    //       payload: data.results,
    //     });
    //   }
    //   //  else dispatch(actions(IS_LOADING_DATA));
    // } catch (error) {
    //   dispatch({
    //     type: GET_NOW_PLAYING_MOVIES_FAILED,
    //     payload: err.message,
    //   });
    // }
    await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
    })
      .then((responseData) => {
        const { data } = responseData;
        dispatch({
          type: GET_NOW_PLAYING_MOVIES,
          payload: data.results,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: GET_NOW_PLAYING_MOVIES_FAILED,
          payload: err.message,
        });
      });
  };
};
