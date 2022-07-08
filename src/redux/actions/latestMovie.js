import axios from "axios";
import { GET_LATEST_MOVIES, GET_LATEST_MOVIES_FAILED } from "..";

export const LatestMovies = () => async (dispatch) => {
  // try {
  //   const { data } = await axios.get(
  //     `https://api.themoviedb.org/3/movie/latest?api_key=${key}`
  //   );
  //   if (data) {
  //     dispatch({
  //       type: GET_LATEST_MOVIES,
  //       payload: data.results,
  //     });
  //   }
  //   //  else dispatch(actions(IS_LOADING_DATA));
  // } catch (error) {
  //   dispatch({
  //     type: GET_LATEST_MOVIES_FAILED,
  //     payload: err.message,
  //   });
  // }
  await axios({
    method: "get",
    url: `https://api.themoviedb.org/3/movie/latest?api_key=56f1cb38d475f4ac3ef8ad55e0c001f6`,
  })
    .then((responseData) => {
      const { data } = responseData;
      console.log(responseData);
      dispatch({
        type: GET_LATEST_MOVIES,
        payload: data.results,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_LATEST_MOVIES_FAILED,
        payload: err.message,
      });
    });
};

// () => {
//   return (dispatch) => {
//   };
// };
