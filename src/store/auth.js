import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  uid: null,
  email: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
    },
    logout(state) {
      state.uid = initialAuthState.uid;
      state.email = initialAuthState.email;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
