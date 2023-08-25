import { createSlice } from "@reduxjs/toolkit";
import { getMoviesBySearch } from "../getData/getMoviesBySearch";
import { getTvBySearch } from "../getData/getTvBySearch";

const initialState = {
  tv: [],
  isload: true,
};
const moviesBySearchSlice = createSlice({
  name: "tvSearch",
  initialState,
  extraReducers: {
    [getTvBySearch.pending]: (state, action) => {
      state.isload = true;
    },
    [getTvBySearch.fulfilled]: (state, action) => {
      state.tv = action.payload;
      state.isload = false;
    },
    [getTvBySearch.rejected]: (state, action) => {
      state.isload = true;
    },
  },
});
export default moviesBySearchSlice.reducer;
