import { toggleCartProducts } from "@/handlers/toggleCartProducts";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import type { Product } from "@/types/Product";
import clsx from "clsx";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  isProductInCart: boolean;
  product: Product;
}

export const AddToCartButton: FC<Props> = ({ isProductInCart, product }) => {
  const dispatch = useAppDispatch();
  const { cartProducts } = useAppSelector((state) => state.cart);
  const { t } = useTranslation();

  return (
    <button
      className={clsx(
        isProductInCart
          ? "bg-white text-green border-1 border-elements"
          : "bg-primary text-white",
        "h-10 w-full text-button hover:cursor-pointer hover:shadow-xl"
      )}
      onClick={() => toggleCartProducts(product, cartProducts, dispatch)}
    >
      {isProductInCart ? t("added") : t("add.to.cart")}
    </button>
  );
};
