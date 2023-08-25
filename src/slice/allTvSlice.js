import { createSlice } from "@reduxjs/toolkit";

import { getAllMovies } from "../getData/getMovies";
import { getTv } from "../getData/getTv";

const initialState = {
  tv: [],
  isload: true,
};
const tvSlice = createSlice({
  name: "tv",
  initialState,
  extraReducers: {
    [getTv.pending]: (state, action) => {
      state.isload = true;
    },
    [getTv.fulfilled]: (state, action) => {
      state.tv = action.payload;
      state.isload = false;
    },
    [getTv.rejected]: (state, action) => {
      state.isload = true;
    },
  },
});
export default tvSlice.reducer;
