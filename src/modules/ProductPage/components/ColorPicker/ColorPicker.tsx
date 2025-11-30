import { bgColorMap } from "@/constants/productColors";
import clsx from "clsx";
import { type FC } from "react";
import { useNavigate } from "react-router";
import products from "../../../../api/products.json";

interface Props {
  colors: string[];
  productColor: string;
  productId: string;
}

export const ColorPicker: FC<Props> = ({ productColor, colors, productId }) => {
  const navigate = useNavigate();

  const handleClick = (color: string) => {
    const newId = productId.slice(0, productId.lastIndexOf("-") + 1) + color; // the only way to loop once through current json

    const newProduct = products.find(
      (p) => p.color === color && p.itemId === newId
    );

    if (!newProduct) return;

    navigate(`/product/${newProduct.id}`);
  };

  return (
    <div className="flex gap-2 flex-wrap justify-self-start">
      {colors.map((color) => (
        <button
          key={color}
          className={clsx(
            productColor === color
              ? "border-primary pointer-events-none"
              : "border-secondary",
            "flex items-center justify-center border-2 rounded-4xl w-8 h-8 transition-transform hover:scale-110 hover:cursor-pointer"
          )}
          onClick={() => handleClick(color)}
        >
          <div
            className={clsx(
              bgColorMap[color as keyof typeof bgColorMap],
              "w-full h-full rounded-4xl border-2 border-white"
            )}
          />
        </button>
      ))}
    </div>
  );
};
