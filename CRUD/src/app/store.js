import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/crudSlice.js";

export const store = configureStore({
  reducer: {
    users: userSlice,
  },
});
