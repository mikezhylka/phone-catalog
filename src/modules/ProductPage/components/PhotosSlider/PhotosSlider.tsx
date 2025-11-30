import clsx from "clsx";
import { useRef, useState, type FC, type TouchEvent } from "react";

interface Props {
  images: string[];
}

export const PhotosSlider: FC<Props> = ({ images }) => {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const [currentSlide, setCurrentSlide] = useState(1);
  const currentPicture = images[currentSlide - 1];

  const normalizeImgPath = (path: string) => `/${path}`;
  const handleImgClick = (slide: number) => setCurrentSlide(slide + 1);

  const handleMouseEnter = (event: TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleMouseMove = (event: TouchEvent) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const delta = touchStartX.current - touchEndX.current;

    if (Math.abs(delta) > 50) {
      if (delta > 0) {
        setCurrentSlide((prev) => (prev === images.length ? 1 : prev + 1));
      } else {
        setCurrentSlide((prev) => (prev === 1 ? images.length : prev - 1));
      }
    }
  };

  return (
    <section className="flex items-center md:items-start flex-col-reverse my-10 md:grid md:grid-cols-7 md:gap-4 md:col-span-7 lg:col-span-12 md:my-0 md:h-fit">
      <div className="flex md:flex-col  gap-2 md:col-span-1">
        {images.map((picture, index) => (
          <div
            className={clsx(
              picture === currentPicture
                ? " border-primary"
                : "border-elements",
              "group border-1 p-1 hover:cursor-pointer"
            )}
            key={picture}
          >
            <img
              src={normalizeImgPath(picture)}
              className="h-12 lg:h-20 aspect-square object-contain group-hover:scale-105 transition-transform duration-200"
              onClick={() => handleImgClick(index)}
            />
          </div>
        ))}
      </div>
      <img
        className="w-full aspect-square mb-5.5 object-contain max-w-80 md:max-w-full md:col-span-6 md:mb-0"
        src={normalizeImgPath(currentPicture)}
        alt="Product picture"
        onTouchStart={handleMouseEnter}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleTouchEnd}
      />
    </section>
  );
};
