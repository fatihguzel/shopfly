import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/Auth/authSlice";
import cartSlice from "../features/Cart/cartSlice";
import categorySlice from "../features/Category/categorySlice";
import productSlice from "../features/Product/productSlice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    products: productSlice,
    cart: cartSlice,
    auth: authSlice,
  },
});
