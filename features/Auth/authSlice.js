import { createSlice } from "@reduxjs/toolkit";
import { loginAction, registerAction } from "./authActions";

const initialState = {
  loginedUser: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state, { type, payload }) => {
      state.loginedUser.push({
        email: payload.email,
        password: payload.password,
        logined: true,
      });
    });
    builder.addCase(registerAction.fulfilled, (state, { type, payload }) => {
      state.registeredUser = payload;
    });
  },
});

export default authSlice.reducer;
