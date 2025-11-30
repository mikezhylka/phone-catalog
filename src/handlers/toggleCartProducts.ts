import { updateCartProducts } from "@/features/cart/cartSlice";
import type { AppDispatch } from "@/store/store";
import type { CartProduct } from "@/types/CartProduct";
import type { Product } from "@/types/Product";

export const toggleCartProducts = (
  product: Product,
  cartProducts: CartProduct[],
  dispatch: AppDispatch
) => {
  const updatedProducts: CartProduct[] = cartProducts.find(
    (p) => p.id === product.id
  )
    ? cartProducts.filter((p) => p.id !== product.id)
    : [...cartProducts, { ...product, quantity: 1 }];

  dispatch(updateCartProducts(updatedProducts as CartProduct[]));
  localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
};
