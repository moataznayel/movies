import { createAsyncThunk } from "@reduxjs/toolkit";
import Instance from "../instanceAxios/Instance";

export const getMoviesBySearch = createAsyncThunk(
  "movies/getAll",
  async (search) => {
    const res = await Instance.get(`/search/movie?query=${search}`);
    console.log(res.data.results);
    return res.data.results;
  }
);
