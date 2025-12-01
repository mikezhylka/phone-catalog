import { toggleFavProducts } from "@/handlers/toggleFavProducts";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import type { Product } from "@/types/Product";
import clsx from "clsx";
import type { FC } from "react";

interface Props {
  product: Product;
  isInFavorites: boolean;
}

export const AddToFavoritesButton: FC<Props> = ({ product, isInFavorites }) => {
  const { favProducts } = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  return (
    <button
      className={clsx(
        isInFavorites ? "bg-favorites-active-icon" : "bg-favorites-icon",
        "w-10 h-10 border-1 border-icons shrink-0 bg-center bg-no-repeat hover:cursor-pointer hover:border-primary"
      )}
      title="Add to favorites"
      onClick={() => toggleFavProducts(product, favProducts, dispatch)}
    />
  );
};
