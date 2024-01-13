import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null, isLoggedIn: false};

const loginSlice = createSlice({
  name: "Login",
  initialState: initialState,
  reducers: {
    updateLoginStatus: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true
    },
  },
});

export const { updateLoginStatus } = loginSlice.actions;

export default loginSlice.reducer;
