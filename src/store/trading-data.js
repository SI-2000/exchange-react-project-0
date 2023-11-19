import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current_price: "10",
  order_type: "LIMIT",
  tradeForm: {
    pair: "bitcoin",
    errorMessages: {
      buy: { stop: [], price: [], amount: [], form: [] },
      sell: { stop: [], price: [], amount: [], form: [] },
    },
    buy: {
      stop: { value: "", isValid: false },
      price: { value: "", isValid: false },
      amount: { value: "", isValid: false },
    },
    sell: {
      stop: { value: "", isValid: false },
      price: { value: "", isValid: false },
      amount: { value: "", isValid: false },
    },
  },
};

const tradingSlice = createSlice({
  name: "trading-data",
  initialState,
  reducers: {
    changeOrderType(state, action) {
      state.order_type = action.payload;
    },
    updateInputs(state, action) {
      const { formType, inputName, value } = action.payload;
      state.tradeForm[formType][inputName] = value;
      // state.tradeForm[formType][inputName].value = value;
    },
    newErrorMessage(state, action) {
      const { formType, updatedPart, errMes } = action.payload;
      state.tradeForm.errorMessages[formType][updatedPart] = [];
      state.tradeForm.errorMessages[formType][updatedPart].push(errMes);
    },
  },
});

export const tradingActions = tradingSlice.actions;

export default tradingSlice.reducer;
