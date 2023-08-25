import { createAsyncThunk } from "@reduxjs/toolkit";
import Instance from "../instanceAxios/Instance";

export const getMoviesBySearch = createAsyncThunk(
  "moviesSearch/getAll",
  async (search) => {
    const res = await Instance.get(`/search/movie?page=2&query=${search}`);
    // console.log(res.data);
    return { movies: res.data.results, total: res.data.total_results };
  }
);
