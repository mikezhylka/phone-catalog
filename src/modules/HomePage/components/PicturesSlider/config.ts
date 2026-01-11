import type { SlidingBanner } from "@/types/SlidingBanner";

import banner3 from "@/assets/img/banner-apple-vision-pro.webp";
import banner2 from "@/assets/img/banner-iphone-17.webp";
import banner1Mobile from "@/assets/img/banner-slider-main-mobile.jpg";
import banner1Tablet from "@/assets/img/banner-slider-main-tablet.webp";

export const slidingBanners: SlidingBanner[] = [
  {
    id: 1,
    path: banner1Mobile,
    responsivePath: banner1Tablet,
  },

  {
    id: 2,
    path: banner2,
  },

  {
    id: 3,
    path: banner3,
  },
];
