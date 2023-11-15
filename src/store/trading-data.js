import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tradeFormErrors: { buy: "", sell: "" },
};

const TradingSlice = createSlice({
  name: "trading-data",
  initialState,
  reducers: {
    updataBuyErrors(state, action) {
      const { formType, value } = action.payload;
      state.tradeFormErrors[`${formType}`] = value;
    },
  },
});

export const TradingActions = TradingSlice.actions

export default TradingSlice.reducer