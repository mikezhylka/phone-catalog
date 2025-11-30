import type { Category } from "@/types/Category";
import clsx from "clsx";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

interface Props {
  category: Category;
}

export const ShoppingCategory: FC<Props> = ({ category }) => {
  const { t } = useTranslation();
  const { banner, title, productsLen, to } = category;
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(to);
  };

  return (
    <article
      className={clsx(
        "group w-full md:col-span-4 lg:col-span-8 hover:cursor-pointer"
      )}
      onClick={handleCategoryClick}
    >
      <div className="overflow-hidden">
        <img
          className="w-full aspect-square transition-transform duration-300 transform group-hover:scale-105 origin-center"
          src={banner}
          alt={title}
        />
      </div>
      <h4 className="heading-h4 mt-6 mb-1">
        {t(`shopping.categories.${title}`)}
      </h4>
      <p className="text-body text-secondary">{`${productsLen} ${t("shopping.categories.models")}`}</p>
    </article>
  );
};
