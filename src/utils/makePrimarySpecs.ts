import type { TFunction } from "i18next";

export const makePrimarySpecs = (
  t: TFunction<"translation", undefined>,
  screen: string,
  resolution: string,
  processor: string,
  ram: string
) => [
  { title: t("screen"), value: screen },
  { title: t("resolution"), value: resolution },
  { title: t("processor"), value: processor },
  { title: t("RAM"), value: ram },
];
