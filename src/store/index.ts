import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartReducer";
import { useDispatch } from "react-redux";
import filtersReducer from "./filters/filtersReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
