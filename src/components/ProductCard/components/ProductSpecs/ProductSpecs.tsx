import type { Product } from "@/types/Product";
import { getProductSpecs } from "@/utils/getProductSpecs";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  product: Product;
}

export const ProductSpecs: FC<Props> = ({ product }) => {
  const { t } = useTranslation();
  const productSpecs = getProductSpecs(t, product);

  return (
    <dl className="flex flex-col gap-2 py-2">
      {productSpecs.map((spec) => {
        const { id, title, value } = spec;

        return (
          <div className="flex justify-between items-center" key={id}>
            <dt className="text-small text-secondary">{title}</dt>
            <dd className="text-uppercase">{value}</dd>
          </div>
        );
      })}
    </dl>
  );
};
