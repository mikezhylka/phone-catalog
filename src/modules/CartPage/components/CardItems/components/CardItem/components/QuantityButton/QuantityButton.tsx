import type { FC } from "react";

interface Props {
  onClick: () => void;
  type: "add" | "minus";
  isDisabled?: boolean;
}

export const QuantityButton: FC<Props> = ({ onClick, type, isDisabled }) => {
  return (
    <button
      className="w-8 h-8 border-1 border-elements hover:cursor-pointer hover:border-primary disabled:cursor-not-allowed disabled:opacity-50"
      onClick={onClick}
      disabled={isDisabled}
    >
      {type === "add" ? "+" : "-"}
    </button>
  );
};
