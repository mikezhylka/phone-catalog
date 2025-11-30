import cartReducer from "@/features/cart/cartSlice";
import favoritesReducer from "@/features/favs/favsSlice";
import {
  configureStore,
  type Action,
  type ThunkAction,
} from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
