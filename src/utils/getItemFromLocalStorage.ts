import type { CartProduct } from "@/types/CartProduct";
import type { Product } from "@/types/Product";

export const getItemFromLocalStorage = (itemKey: string): Product[] | CartProduct[] => {
  const stored = localStorage.getItem(itemKey);

  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }

  return [];
};
