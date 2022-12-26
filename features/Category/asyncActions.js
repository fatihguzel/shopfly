import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getCategories = createAsyncThunk("getCategories/Category", async () => {
  const res = await axios.get(`http://localhost:5000/kategoriler`, {});
  return res.data;
});

export { getCategories };
