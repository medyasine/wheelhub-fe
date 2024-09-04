import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const storedState = JSON.parse(sessionStorage.getItem("login"));

const initialState = storedState || { token: null, username: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { token } = action.payload;

      const decodedToken = jwtDecode(token);
      console.log(decodedToken);

      sessionStorage.setItem(
        "login",
        JSON.stringify({
          token,
          username: decodedToken.sub,
        })
      );

      state.token = token;
      state.username = decodedToken.sub;
    },
    logout(state) {
      sessionStorage.removeItem("login");
      state.token = null;
      state.username = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice;
