import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import assetsReducer from "./assets";
import searchPairsReducer from "./search-pairs";

const store = configureStore({
  reducer: {
    auth: authReducer,
    assets: assetsReducer,
    searchOverlay: searchPairsReducer,
  },
});

export default store;
