import { combineReducers } from "redux";
import videoReducers from "./getVideo";
import latestMoviesReducers from "./latestMovies";
import nowPlayingReducers from "./nowPlaying";
import popularMoviesReducers from "./popularMovies";
import popularseriesReducers from "./popularSeries";
import singleMovieReducers from "./singleMovie";
import topRatedReducers from "./topRatedMovies";

export default combineReducers({
  Video: videoReducers,
  Latest: latestMoviesReducers,
  Playing: nowPlayingReducers,
  PopMovies: popularMoviesReducers,
  PopSeries: popularseriesReducers,
  Movie: singleMovieReducers,
  TopRated: topRatedReducers,
});
