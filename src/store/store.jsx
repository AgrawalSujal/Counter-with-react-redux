import { configureStore } from "@reduxjs/toolkit";
import updateSlice from "../slice/update";

const store = configureStore({
  reducer: {
    update: updateSlice,
  },
});

export default store;
