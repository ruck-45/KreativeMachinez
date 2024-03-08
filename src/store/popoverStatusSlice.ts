import { createSlice } from "@reduxjs/toolkit";


const initialState = { value: true };

if (window.innerWidth <= 800) {
  initialState.value = false;
}

const popoverStatusSlice = createSlice({
  name: "navOpenStatus",
  initialState: initialState,
  reducers: {
    updatePopoverStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updatePopoverStatus } = popoverStatusSlice.actions;

export default popoverStatusSlice.reducer;
