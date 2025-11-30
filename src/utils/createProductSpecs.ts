import type { FullProduct } from "@/types/FullProduct";
import { makeAllSpecs } from "./makeAllSpecs";
import { makePrimarySpecs } from "./makePrimarySpecs";
import type { TFunction } from "i18next";

export const createProductSpecs = (
  t: TFunction<"translation", undefined>,
  product: FullProduct,
  type: "primary" | "all",
) => {
  const { screen, resolution, processor, ram, capacity, cell } = product;

  switch (type) {
    case "primary":
      return makePrimarySpecs(t, screen, resolution, processor, ram);
    case "all":
      return makeAllSpecs(t, screen, resolution, processor, ram, capacity, cell);
  }
};
