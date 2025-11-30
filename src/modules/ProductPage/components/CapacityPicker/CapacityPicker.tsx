import type { FullProduct } from "@/types/FullProduct";
import { buildProductId } from "@/utils/buildProductId";
import clsx from "clsx";
import { type FC } from "react";
import { useNavigate } from "react-router";
import products from "../../../../../public/api/products.json";

interface Props {
  currentProduct: FullProduct;
}

export const CapacityPicker: FC<Props> = ({ currentProduct }) => {
  const navigate = useNavigate();

  const { id, capacityAvailable, color } = currentProduct;

  const handleClick = (capacity: string) => {
    const newProductId = buildProductId(id, capacity, color);
    const newProduct = products.find((p) => p.itemId === newProductId);

    if (!newProduct) return;

    navigate(`/product/${newProduct.id}`);
  };

  return (
    <div className="flex gap-2">
      {capacityAvailable.map((capacity) => (
        <button
          key={capacity}
          className={clsx(
            "text-body h-8 p-2 flex items-center hover:cursor-pointer hover:bg-elements",
            currentProduct.capacity === capacity
              ? "bg-primary text-white pointer-events-none"
              : "border-1 border-icons"
          )}
          onClick={() => handleClick(capacity)}
        >
          {capacity}
        </button>
      ))}
    </div>
  );
};
