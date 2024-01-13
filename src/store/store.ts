// Dependencies
import { configureStore } from "@reduxjs/toolkit";

// Local Files
import curTabSlice from "./curTabSlice";
import navOpenStatusSlice from "./navOpenStatusSlice";
import toLoginSlice from "./toLoginSlice";
import loginSlice from "./loginSlice";
const store = configureStore({
  reducer: {
    login: loginSlice,
    curTab: curTabSlice,
    navOpenStatus: navOpenStatusSlice,
    toLogin: toLoginSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
