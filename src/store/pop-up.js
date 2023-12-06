import { createSlice } from "@reduxjs/toolkit";

const popUpSlice = createSlice({
  name: "popUps",
  initialState: { popUpList: [] },
  reducers: {
    newPopUp(state, action) {
      // Payload is new pop up properties
      state.popUpList = [action.payload];
    },
    deletePopUp(state, action) {
      // Payload is the id of the deleted pop up
      state.popUpList = state.popUpList.filter((item, index) => {
        return action.payload !== index;
      });
    },
  },
});

export const popUpActions = popUpSlice.actions

export default popUpSlice.reducer