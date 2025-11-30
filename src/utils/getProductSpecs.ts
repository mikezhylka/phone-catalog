import type { Product } from "@/types/Product";
import type { ProductSpec } from "@/types/ProductSpec";
import type { TFunction } from "i18next";

export const getProductSpecs = (
  t: TFunction<"translation", undefined>,
  product: Product
): ProductSpec[] => [
  { id: 1, title: t("screen"), value: product.screen },
  { id: 2, title: t("capacity"), value: product.capacity },
  { id: 3, title: t("RAM"), value: product.ram },
];
