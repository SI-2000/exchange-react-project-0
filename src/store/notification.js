import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: [],
  reducers: {
    addNotification(state, action) {
      // Payload is new notification data
      return [{ ...action.payload }, ...state];
    },
    removeNotification(state, action) {
      // Payload is id of the removed note
      return state.filter((el) => el.id !== action.payload);
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice.reducer;
