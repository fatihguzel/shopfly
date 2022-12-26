import { createSlice } from "@reduxjs/toolkit";
import { filterProducts, getProducts } from "./asyncActions";

const initialState = {
  products: [],
  filterProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, { type, payload }) => {
      //   payload = payload.filter((urun) => urun.urunKategorisi === "Elektronik");
      state.products = payload;
      console.log(state.products);
    });

    builder.addCase(filterProducts.fulfilled, (state, { type, payload }) => {
      console.log(payload[0].kategori_ismi);
      state.filterProducts = state.products.filter(
        (urun) => urun.urunKategorisi === payload[0].kategori_ismi
      );
      console.log(state.filterProducts);
    });
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
