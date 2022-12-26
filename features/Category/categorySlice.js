import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./asyncActions";

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, { type, payload }) => {
      // console.log(payload);
      state.categories = payload;
    });
  },
});

export const {} = categorySlice.actions;

export default categorySlice.reducer;
