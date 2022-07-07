import { combineReducers } from "redux";
import videoReducer from "./getVideo";
import latestMovies from "./latestMovies";
import nowPlaying from "./nowPlaying";
import popularMovies from "./popularMovies";
import popularseries from "./popularSeries";
import singleMovie from "./singleMovie";
import topRated from "./topRatedMovies";

export default combineReducers({
  Video: videoReducer,
  Latest: latestMovies,
  Playing: nowPlaying,
  PopMovies: popularMovies,
  PopSeries: popularseries,
  Movie: singleMovie,
  TopRated: topRated,
});
