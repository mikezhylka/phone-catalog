import clsx from "clsx";
import type { FC } from "react";

interface Props {
  type: "prev" | "next";
  isDisabled: boolean;
  onClick: () => void;
}

export const PaginationButton: FC<Props> = ({ type, isDisabled, onClick }) => {
  const backgroundImage = isDisabled
    ? type === "prev"
      ? "bg-arrow-left-disabled-icon"
      : "bg-arrow-right-disabled-icon"
    : type === "prev"
    ? "bg-arrow-left-icon"
    : "bg-arrow-right-icon";

  return (
    <button
      className={clsx(
        "w-8 h-8 bg-no-repeat bg-center border-1",
        backgroundImage,
        isDisabled
          ? "border-elements"
          : "border-icons hover:bg-hover-bg hover:cursor-pointer"
      )}
      disabled={isDisabled}
      onClick={onClick}
    ></button>
  );
};
