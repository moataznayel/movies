import { createAsyncThunk } from "@reduxjs/toolkit";
import Instance from "../instanceAxios/Instance";

export const getTvBySearch = createAsyncThunk(
  "tvSearch/getAll",
  async (search) => {
    const res = await Instance.get(`/search/tv?page=2&query=${search}`);
    // console.log(res.data);
    return { tv: res.data.results, total: res.data.total_results };
  }
);
