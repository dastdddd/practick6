import { configureStore } from "@reduxjs/toolkit";
import { familyApi } from "./familyAPI";

export const store = configureStore({
  reducer: {
    [familyApi.reducerPath]: familyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(familyApi.middleware),
});
