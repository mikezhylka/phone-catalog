import clsx from "clsx";
import type { Dispatch, FC, SetStateAction } from "react";
import { slidingBanners } from "../../config";

interface Props {
  currentSlide: number;
  setCurrentSlide: Dispatch<SetStateAction<number>>;
}

export const Steps: FC<Props> = ({ currentSlide, setCurrentSlide }) => {
  return (
    <div className="flex gap-3.5 items-center justify-center w-20 h-6">
      {slidingBanners.map((banner, i) => (
        <button
          key={banner.id}
          className={clsx(
            "w-3.5 h-1 bg-elements hover:cursor-pointer",
            currentSlide === i + 1 && "bg-primary"
          )}
          onClick={() => setCurrentSlide(i + 1)}
        />
      ))}
    </div>
  );
};
