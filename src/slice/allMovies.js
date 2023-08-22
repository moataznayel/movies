import { createSlice } from "@reduxjs/toolkit";

import { getAllMovies } from "../getData/getMovies";

const initialState = {
  movies: [],
  isload: true,
};
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: {
    [getAllMovies.pending]: (state, action) => {
      state.isload = true;
    },
    [getAllMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.isload = false;
    },
    [getAllMovies.rejected]: (state, action) => {
      state.isload = true;
    },
  },
});
export default moviesSlice.reducer;
