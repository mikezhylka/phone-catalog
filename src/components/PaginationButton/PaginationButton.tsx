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
      ? "bg-[url('/img/icons/arrow-left-disabled.svg')]"
      : "bg-[url('/img/icons/arrow-right-disabled.svg')]"
    : type === "prev"
    ? "bg-[url('/img/icons/arrow-left.svg')]"
    : "bg-[url('/img/icons/arrow-right.svg')]";

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
