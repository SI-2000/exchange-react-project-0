import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import assetsReducer from "./assets";
import searchPairsReducer from "./search-pairs";
import tradingReducer from "./trading-data";
import notificationReducer from "./notification";

const store = configureStore({
  reducer: {
    auth: authReducer,
    assets: assetsReducer,
    searchOverlay: searchPairsReducer,
    tradingData: tradingReducer,
    notes: notificationReducer,
  },
});

export default store;
