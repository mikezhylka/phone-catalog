import type { Product } from "@/types/Product";

export const findProduct = (array: Product[], product: Product) => {
  return array.some((p) => p.id === +product.id);
};
