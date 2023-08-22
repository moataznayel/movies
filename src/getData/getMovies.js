import { createAsyncThunk } from "@reduxjs/toolkit";
import Instance from "../instanceAxios/Instance";

export const getAllMovies = createAsyncThunk(
  "movies/getAll",
  async (pageNumber) => {
    const res = await Instance.get(`/movie/popular?page=${pageNumber}`);
    console.log(res);
    return res.data.results;
  }
);
