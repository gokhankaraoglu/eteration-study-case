import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../services/product";
import { getLocalStorage, setLocalStorage } from "../../utils";

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

const loadCartFromLocalStorage = (): CartState => {
  const savedCart = getLocalStorage<CartState>("cart");
  return savedCart || initialState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromLocalStorage(),
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
      setLocalStorage("cart", state);
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
      setLocalStorage("cart", state);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      setLocalStorage("cart", state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
