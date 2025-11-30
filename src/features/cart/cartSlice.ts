import type { CartProduct } from "@/types/CartProduct";
import { getItemFromLocalStorage } from "@/utils/getItemFromLocalStorage";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: getItemFromLocalStorage("cartProducts") as CartProduct[] || [],
  },
  reducers: {
    updateCartProducts(state, action: PayloadAction<CartProduct[]>) {
      state.cartProducts = action.payload;
    },
  },
});

export const { updateCartProducts } = cartSlice.actions;
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
