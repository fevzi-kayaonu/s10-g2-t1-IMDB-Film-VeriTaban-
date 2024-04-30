import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favoritesReducer from "./favoritesReducer";

const reducers = combineReducers({
  movies: movieReducer,
  favorites: favoritesReducer,
});

export default reducers;
