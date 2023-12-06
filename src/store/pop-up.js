import { createSlice } from "@reduxjs/toolkit";

const popUpSlice = createSlice({
  name: "popUps",
  initialState: { popUpList: [] },
  reducers: {
    newPopUp(state, action) {
      // Payload is new pop up properties
      state.popUpList = [action.payload];
    },
    deletePopUp(state, payload) {
      // Payload is the id of the deleted pop up
      state.popUpList = state.popUpList.filter((item, index) => {
        return payload !== index;
      });
    },
  },
});

export const popUpsActions = popUpSlice.actions

export default popUpSlice.reducer