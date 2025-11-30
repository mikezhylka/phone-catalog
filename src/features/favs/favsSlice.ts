import type { Product } from "@/types/Product";
import { getItemFromLocalStorage } from "@/utils/getItemFromLocalStorage";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favProducts: getItemFromLocalStorage("favProducts"),
  },
  reducers: {
    updateFavProducts(state, action: PayloadAction<Product[]>) {
      state.favProducts = action.payload;
    },
  },
});

export default favoritesSlice.reducer;
export const { updateFavProducts } = favoritesSlice.actions;
