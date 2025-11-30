import { ProductsSlider } from "@/components/ProductsSlider";
import { sortProducts } from "@/utils/sortProducts";
import { useEffect, type FC } from "react";
import { useTranslation } from "react-i18next";
import { PicturesSlider } from "./components/PicturesSlider";
import { ShoppingCategories } from "./components/ShoppingCategories";

export const HomePage: FC = () => {
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }));
  const { t } = useTranslation();

  return (
    <section className="w-full md:px-6 xl:px-38">
      <h1 className="heading-h1 text-center w-full md:text-left my-6 md:my-8 lg:my-14">
        {t("welcome")}
      </h1>
      <PicturesSlider />
      <ProductsSlider
        sortedProducts={sortProducts("year")}
        titleCode="brand.new.models"
      />
      <section className="px-4 my-14 md:px-0">
        <h2 className="heading-h2 mb-6">{t("shop.byCategory")}</h2>
        <ShoppingCategories />
      </section>
      <ProductsSlider
        sortedProducts={sortProducts("prices")}
        titleCode="hot.prices"
      />
    </section>
  );
};
