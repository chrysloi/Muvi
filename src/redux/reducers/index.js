import { combineReducers } from "redux";
import moviesReducers from "./movies.reducers";
import seriesReducers from "./movies.reducers";
import videoReducer from "./videoReducer";
moviesReducers;
seriesReducers;

export default combineReducers({
  Movies: moviesReducers,
  Series: seriesReducers,
  Trailer: videoReducer,
});
