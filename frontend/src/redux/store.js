import { configureStore } from "@reduxjs/toolkit";
import destinationsReducer from "./destinationSlice";

export const store = configureStore({
  reducer: {
    destinations: destinationsReducer,
  },
});
