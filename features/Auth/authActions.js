import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loginAction = createAsyncThunk(
  "login/auth",
  async ({ email, password }) => {
    const res = await axios.get(`http://localhost:5000/users?email=${email}`);
    if (password === res.data[0].password) {
      return res.data[0];
    } else {
      console.log("yanlış şifre girdiniz");
    }
  }
);

const registerAction = createAsyncThunk(
  "register/auth",
  async ({ email, password }) => {
    const res = await axios.post(
      "http://localhost:5000/users",
      {
        email,
        password,
      },
      { withCredentials: true }
    );
    console.log(res.data.email);
    console.log(res.data.friends);
    return res.data[0];
  }
);

export { loginAction, registerAction };
