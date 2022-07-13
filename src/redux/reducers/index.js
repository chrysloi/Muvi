import { combineReducers } from "redux";
import videoReducers from "./getVideo";
import upcomingMoviesReducers from "./upcomingMovies";
import nowPlayingReducers from "./nowPlaying";
import popularMoviesReducers from "./popularMovies";
import popularseriesReducers from "./popularSeries";
import singleMovieReducers from "./singleMovie";
import topRatedReducers from "./topRatedMovies";
import serieReducers from "./getSerie";
import searchReducer from "./searchReducer";
import authReduce from "./authReduce";

export default combineReducers({
  Video: videoReducers,
  Upcoming: upcomingMoviesReducers,
  Playing: nowPlayingReducers,
  PopMovies: popularMoviesReducers,
  TopRated: topRatedReducers,
  Movie: singleMovieReducers,
  PopSeries: popularseriesReducers,
  Serie: serieReducers,
  Search: searchReducer,
  Login: authReduce,
});
