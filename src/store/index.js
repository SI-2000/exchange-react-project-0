import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import assetsReducer from "./assets";
import searchPairsReducer from "./search-pairs";
import tradingReducer from "./trading-data";
import popUpsReducer from "./pop-up";

const store = configureStore({
  reducer: {
    auth: authReducer,
    assets: assetsReducer,
    searchOverlay: searchPairsReducer,
    tradingData: tradingReducer,
    popUp: popUpsReducer,
  },
});

export default store;
