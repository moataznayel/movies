import { createSlice } from "@reduxjs/toolkit";
import { getMoviesBySearch } from "../getData/getMoviesBySearch";

const initialState = {
  movies: [],
  isload: true,
};
const moviesBySearchSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: {
    [getMoviesBySearch.pending]: (state, action) => {
      state.isload = true;
    },
    [getMoviesBySearch.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.isload = false;
    },
    [getMoviesBySearch.rejected]: (state, action) => {
      state.isload = true;
    },
  },
});
export default moviesBySearchSlice.reducer;
