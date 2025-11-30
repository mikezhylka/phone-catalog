import { updateFavProducts } from "@/features/favs/favsSlice";
import type { AppDispatch } from "@/store/store";
import type { Product } from "@/types/Product";

export const toggleFavProducts = (
  product: Product,
  favProducts: Product[],
  dispatch: AppDispatch
) => {
  const updatedProducts: Product[] = favProducts.find(
    (p) => p.id === product.id
  )
    ? favProducts.filter((p) => p.id !== product.id)
    : [...favProducts, product];

  dispatch(updateFavProducts(updatedProducts));
  localStorage.setItem("favProducts", JSON.stringify(updatedProducts));
};
