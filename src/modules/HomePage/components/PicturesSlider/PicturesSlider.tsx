import { useEffect, useRef, useState, type FC, type TouchEvent } from "react";
import { Banner } from "./components/Banner";
import { SliderButton } from "./components/SliderButton";
import { Steps } from "./components/Steps";
import { slidingBanners } from "./config";

export const PicturesSlider: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const updateSlide = (updater: number | ((prev: number) => number)) => {
    setCurrentSlide(updater);
    resetInterval();
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const delta = touchStartX.current - touchEndX.current;

    if (Math.abs(delta) > 50) {
      if (delta > 0) {
        setCurrentSlide((prev) =>
          prev === slidingBanners.length ? 1 : prev + 1
        );
      } else {
        setCurrentSlide((prev) =>
          prev === 1 ? slidingBanners.length : prev - 1
        );
      }

      resetInterval();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slidingBanners.length ? 1 : prev + 1
      );
    }, 5000);
  };

  const clear = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const resetInterval = () => {
    clear();
    startInterval();
  };

  useEffect(() => {
    startInterval();

    return () => clear();
  }, []);

  return (
    <section className="box-border flex flex-col gap-2 sm:items-center w-full mb-14 md:mb-16 lg:mb-20">
      <div
        className="flex gap-5 lg:gap-4 justify-between h-full w-full box-border"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <SliderButton type="prev" setCurrentSlide={updateSlide} />
        <Banner currentSlide={currentSlide} />
        <SliderButton type="next" setCurrentSlide={updateSlide} />
      </div>
      <Steps currentSlide={currentSlide} setCurrentSlide={updateSlide} />
    </section>
  );
};
