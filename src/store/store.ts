// Dependencies
import { configureStore } from "@reduxjs/toolkit";
import popoverStatusSlice from "./popoverStatusSlice";

// Local Files
import curTabSlice from "./curTabSlice";
import navOpenStatusSlice from "./navOpenStatusSlice";
import toLoginSlice from "./toLoginSlice";

const store = configureStore({
  reducer: {
    curTab: curTabSlice,
    navOpenStatus: navOpenStatusSlice,
    toLogin: toLoginSlice,
    popoverStatus: popoverStatusSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
