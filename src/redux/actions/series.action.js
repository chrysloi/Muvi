import axios from "axios";

const key = "56f1cb38d475f4ac3ef8ad55e0c001f6";
export const PopularSeries = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING SERIES" });

    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/tv/popular?api_key=${key}`,
    })
      .then((responseData) => {
        const { data } = responseData;
        console.log(responseData);
        dispatch({
          type: "SERIES SUCCESSFULLY LOADED",
          payload: data.results,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "SERIES FAILED TO LOAD",
          payload: err.message,
        });
      });
  };
};
