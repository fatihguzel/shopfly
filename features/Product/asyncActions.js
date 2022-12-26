import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getProducts = createAsyncThunk("getProducts/Product", async () => {
  const res = await axios.get("http://localhost:5000/urunler", {});
  return res.data;
});

const filterProducts = createAsyncThunk(
  "filterCategories/Category",
  async ({ title }) => {
    const res = await axios.get(
      `http://localhost:5000/kategoriler?kategori_ismi=${title}`
    );
    return res.data;
  }
);
export { getProducts, filterProducts };
