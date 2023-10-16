import { createSlice } from "@reduxjs/toolkit";

const searchPairsSlice = createSlice({
  name: "searchPairsIsOpen",
  initialState: {isOpened:false},
  reducers: {
    close(state) {
      state.isOpened = false;
    },
    open(state) {
      state.isOpened = true;
    },
  },
});

export const searchPairsAction = searchPairsSlice.actions;

export default searchPairsSlice.reducer;
