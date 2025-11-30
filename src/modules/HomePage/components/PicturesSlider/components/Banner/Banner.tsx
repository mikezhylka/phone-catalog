import { endpoints } from "@/constants/endpoints";
import type { FC } from "react";
import { slidingBanners } from "../../config";

interface Props {
  currentSlide: number;
}

export const Banner: FC<Props> = ({ currentSlide }) => {
  const currentPicture = slidingBanners.find(
    (banner) => banner.id === currentSlide
  );

  return (
    <picture className="w-full aspect-square md:aspect-[2.6]">
      {currentPicture?.responsivePath && (
        <source
          media={`(min-width: ${endpoints.tablet}px)`}
          srcSet={currentPicture?.responsivePath}
        />
      )}
      <img
        src={currentPicture?.path}
        alt="Banner"
        className="w-full h-full object-center object-cover"
      />
    </picture>
  );
};
