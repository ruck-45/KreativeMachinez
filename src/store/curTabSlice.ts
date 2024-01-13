import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CurTabState  = {
  value: string;
}

const initialState: CurTabState = {
  value: "",
};

const curTabSlice = createSlice({
  name: "curTab",
  initialState,
  reducers: {
    updateTab: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { updateTab } = curTabSlice.actions;

export default curTabSlice.reducer;
