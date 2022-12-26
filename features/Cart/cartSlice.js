import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, { payload }) => {
      state.cart.push({
        title: payload.title,
        amount: payload.amount,
        discount: payload.discount,
        image: payload.image,
      });
    },

    removeOneProductToCart: (state, { payload }) => {
      console.log(payload.title);

      state.cart = state.cart.filter(
        (product) => product.title !== payload.title
      );
    },

    removeAllProduct: (state, { payload }) => {
      state.cart = [];
    },
  },
});

export const { addProductToCart, removeOneProductToCart, removeAllProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
