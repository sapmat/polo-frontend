import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./songSlice";

const store = configureStore({
  reducer: {
    counter: songReducer,
  },
});

export default store;
