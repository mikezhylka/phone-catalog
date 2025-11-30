import type { FullProduct } from "@/types/FullProduct";
import products from "../api/products.json";

export const generateRecommendedProducts = (currentProduct: FullProduct) => {
  return products
    .filter((p) => p.category === currentProduct.category)
    .sort((p1, p2) => p2.year - p1.year);
};
