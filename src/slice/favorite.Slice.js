import { createSlice } from "@reduxjs/toolkit";

import { getAllMovies } from "../getData/getMovies";
import { getTv } from "../getData/getTv";

const initialState = {
  // favorite: { movies: [], tv: [] },
  movies: [],
  tv: [],
};
const favoriteSlice = createSlice({
  name: "tv",
  initialState,

  reducers: {
    favoriteMovies: (state, action) => {
      state.movies = action.payload;
    },
    favoriteTv: (state, action) => {
      state.tv = action.payload;
    },
  },
});
export const { favoriteMovies, favoriteTv } = favoriteSlice.actions;
export default favoriteSlice.reducer;
