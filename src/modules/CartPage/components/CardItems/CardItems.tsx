import { useAppSelector } from "@/store/hooks";
import type { FC } from "react";
import { CardItem } from "./components/CardItem";

export const CardItems: FC = () => {
  const { cartProducts } = useAppSelector((state) => state.cart);

  return (
    <ul className="flex flex-col gap-4 lg:col-span-16">
      {cartProducts.map((product) => (
        <CardItem key={product.id} product={product} />
      ))}
    </ul>
  );
};
