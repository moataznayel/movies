import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../slice/allMovies";
import tvSlice from "../slice/allTvSlice";
import favoriteSlice from "../slice/favorite.Slice";
import moviesBySearchSlice from "../slice/moviesBySearchSlice";
import tvBySearchSlice from "../slice/tvBySearchSlice";
export const store = configureStore({
  reducer: {
    allMovies: moviesSlice,
    allTv: tvSlice,
    favorite: favoriteSlice,
    allMoviesBySearch: moviesBySearchSlice,
    allTvBySearch: tvBySearchSlice,
  },
});
