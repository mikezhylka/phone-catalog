import { shoppingCategories } from "@/constants/shoppingCategories";
import type { FC } from "react";
import { ShoppingCategory } from "./components/ShoppingCategory";

export const ShoppingCategories: FC = () => {
  return (
    <div className="flex gap-8 flex-col md:grid md:grid-cols-12 lg:grid-cols-24 gap-x-4">
      {shoppingCategories.map((category) => (
        <ShoppingCategory category={category} key={category.title} />
      ))}
    </div>
  );
};
