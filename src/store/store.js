import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../slice/allMovies";
import moviesBySearchSlice from "../slice/moviesBySearchSlice";
export const store = configureStore({
  reducer: {
    allMovies: moviesSlice,
    allMoviesBySearch: moviesBySearchSlice,
  },
});
