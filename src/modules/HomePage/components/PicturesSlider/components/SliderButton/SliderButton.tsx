  import clsx from "clsx";
  import type { Dispatch, FC, SetStateAction } from "react";
  import { slidingBanners } from "../../config";

  interface Props {
    type: "prev" | "next";
    setCurrentSlide: Dispatch<SetStateAction<number>>;
  }

  export const SliderButton: FC<Props> = ({ type, setCurrentSlide }) => {
    const handleSliderButtonClick = () => {
      setCurrentSlide((prev) => {
        if (type === "next" && prev === slidingBanners.length) {
          return 1;
        }

        if (type === "prev" && prev === 1) {
          return slidingBanners.length;
        }

        return type === "next" ? prev + 1 : prev - 1;
      });
    };

    return (
      <button
        className={clsx(
          "sm:hidden md:inline-block w-8 shrink-0 outline-secondary outline bg-no-repeat bg-center hover:bg-elements hover:cursor-pointer",
          type === "prev"
            ? `bg-[url('/img/icons/arrow-left.svg')]`
            : `bg-[url('/img/icons/arrow-right.svg')]`
        )}
        onClick={handleSliderButtonClick}
      />
    );
  };
