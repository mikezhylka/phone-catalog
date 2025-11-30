import type { FC } from "react";
import type { Product } from "@/types/Product";
import { ProductCard } from "../ProductCard";

interface Props {
  products: Product[];
}

export const ProductsList: FC<Props> = ({ products }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-24 gap-x-4 gap-y-10 mt-8 mb-14 md:mt-10 md:mb-16 lg:mb-20">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};
