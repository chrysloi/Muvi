import axios from "axios";

const key = "56f1cb38d475f4ac3ef8ad55e0c001f6";

export const popularMovies = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING POPULAR MOVIES" });

    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    })
      .then((responseData) => {
        const { data } = responseData;
        console.log(responseData);
        dispatch({
          type: "POPULAR MOVIES SUCCESSFULLY LOADED",
          payload: data.results,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "POPULAR MOVIES FAILED TO LOAD",
          payload: err.message,
        });
      });
  };
};

export const topRatedMovies = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING TOP RATED MOVIES" });

    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    })
      .then((responseData) => {
        const { data } = responseData;
        // console.log(responseData);
        dispatch({
          type: "TOP RATED MOVIES SUCCESSFULLY LOADED",
          payload: data.results,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "TOP RATED MOVIES FAILED TO LOAD",
          payload: err.message,
        });
      });
  };
};

export const NowPlayingMovies = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING NOW PLAYING MOVIES" });

    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
    })
      .then((responseData) => {
        const { data } = responseData;
        // console.log(responseData);
        dispatch({
          type: "NOW PLAYING MOVIES SUCCESSFULLY LOADED",
          payload: data.results,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "NOW PLAYING MOVIES FAILED TO LOAD",
          payload: err.message,
        });
      });
  };
};

export const GetSingleMovie = (id) => (dispatch) => {
  axios({
    method: "get",
    url: `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`,
  })
    .then((responseData) => {
      const { data } = responseData;
      dispatch({
        type: "GET_SINGLE_MOVIE",
        payload: data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: "GET_SINGLE_MOVIE_FAIL",
        payload: err.message,
      });
    });
};
