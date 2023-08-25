import { createAsyncThunk } from "@reduxjs/toolkit";
import Instance from "../instanceAxios/Instance";

export const getTv = createAsyncThunk("tv/getAll", async (pageNumber) => {
  const res = await Instance.get(`/tv/popular?page=${pageNumber}`);
  // console.log(res);
  return res.data.results;
});
