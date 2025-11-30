import type { TFunction } from "i18next";

export const makeAllSpecs = <T>(
  t: TFunction<"translation", undefined>,
  screen: T,
  resolution: T,
  processor: T,
  ram: T,
  memory: T,
  cell: T[]
) => [
  { title: t("screen"), value: screen },
  { title: t("resolution"), value: resolution },
  { title: t("processor"), value: processor },
  { title: t("RAM"), value: ram },
  { title: t("built.in.memory"), value: memory },
  { title: t("cell"), value: cell.join(" ") },
];
