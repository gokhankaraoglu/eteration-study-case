import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../services/product";

export interface CartProduct extends Product {
  quantity: number;
}

interface CartState {
  items: CartProduct[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalAmount += Number(action.payload.price);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload
      );

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
          state.totalAmount -= Number(existingProduct.price);
        } else {
          state.totalAmount -= Number(existingProduct.price);
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
