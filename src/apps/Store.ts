import { configureStore } from "@reduxjs/toolkit";
import filetreeslice from "./features/filetreeslice";


export const Store = configureStore({
  reducer: {
    tree:filetreeslice,
  },
});

// types for TS
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
