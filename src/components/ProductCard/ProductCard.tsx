import { useAppSelector } from "@/store/hooks";
import type { Product } from "@/types/Product";
import clsx from "clsx";
import type { FC } from "react";
import { useNavigate } from "react-router";
import { AddToCartButton } from "../AddToCartButton";
import { AddToFavoritesButton } from "../AddToFavoritesButton";
import { ProductSpecs } from "./components/ProductSpecs";

interface Props {
  product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const navigate = useNavigate();
  const { cartProducts } = useAppSelector((state) => state.cart);
  const { favProducts } = useAppSelector((state) => state.favorites);

  const { id, image, name, fullPrice, price } = product;

  const navigateToProduct = () => navigate(`/product/${id}`);

  const findProduct = (array: Product[]) => {
    return array.some((p) => p.id === product.id);
  };

  const isProductInCart = findProduct(cartProducts);
  const isProductInFavorites = findProduct(favProducts);

  return (
    <article
      className="group flex flex-col justify-around gap-2 p-8 md:col-span-6 border-1 border-elements hover:cursor-pointer hover:border-icons transition-transform duration-200"
      onClick={navigateToProduct}
    >
      <img
        className="w-full aspect-square object-contain group-hover:scale-102 group-hover:transition-transform duration-200"
        src={image}
        alt={name}
      />
      <p className="text-body text-primary">{name}</p>
      <div className="flex gap-2 items-center">
        {price ? <h3 className="heading-h3">${price}</h3> : null}
        <h3
          className={clsx("heading-h3", price && "line-through text-secondary")}
        >
          ${fullPrice}
        </h3>
      </div>
      <ProductSpecs product={product} />
      <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
        <AddToCartButton product={product} isProductInCart={isProductInCart} />
        <AddToFavoritesButton
          product={product}
          isInFavorites={isProductInFavorites}
        />
      </div>
    </article>
  );
};
