import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import assetsReduser from "./assets";

const store = configureStore({
  reducer: {
    auth: authReducer,
    assets: assetsReduser,
  },
});

export default store;
