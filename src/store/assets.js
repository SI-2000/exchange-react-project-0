import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assets: {},
};

const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    updateAsset: (state, action) => {
      if (state.assets.hasOwnProperty(action.payload.asset)) {
        state.assets[action.payload.asset] += action.payload.value;
      } else {
        state.assets[action.payload.asset] = action.payload.value;
      }
    },
  },
});

export const assetsActions = assetsSlice.actions;

export default assetsSlice.reducer;
