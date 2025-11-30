import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

interface Props {
  where: string;
}

export const NoProductsAdded: FC<Props> = ({ where }) => {
  const { t } = useTranslation();

  return (
    <div className="h-[calc(100lvh-3rem)] md:h-[calc(100lvh-4rem)] w-full flex items-center justify-center flex-col gap-8">
      <h1 className="heading-h1 text-center">
        {t("no.products.title", { where })}
      </h1>
      <button className="w-full md:w-[50vw] lg:w-[20vw]">
        <NavLink
          className="text-button text-center text-white bg-primary w-full h-12 rounded-lg flex items-center justify-center"
          to="/"
        >
          {t("no.products.button.text")}
        </NavLink>
      </button>
    </div>
  );
};
