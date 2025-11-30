import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Pagination } from "@/components/Pagination";
import { ProductsList } from "@/components/ProductsList";
import { useSortProducts } from "@/hooks/useSortProducts";
import { useEffect, type FC } from "react";
import { useTranslation } from "react-i18next";
import products from "../../../public/api/products.json";
import { Dropdown } from "./components/Dropdown";

type CatalogPageProps = {
  title: string;
  category: string;
};

export const CatalogPage: FC<CatalogPageProps> = ({ title, category }) => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredProducts = products.filter((p) => p.category === category);
  const slicedProducts = useSortProducts(filteredProducts);

  return (
    <section className="px-4 md:px-6 lg:px-8 xl:px-38">
      <Breadcrumbs />
      <h1 className="heading-h1 mb-2">
        {t(`catalog.titles.${title.toLowerCase()}`)}
      </h1>
      <p className="text-body text-secondary">
        {filteredProducts.length + " " + t("models")}
      </p>
      <div className="flex gap-4 mt-8 md:grid grid-cols-12">
        <Dropdown title="sort.by" sort="byCategory" />
        <Dropdown title="items.on.page" sort="byPages" />
      </div>
      <ProductsList products={slicedProducts} />
      <Pagination productsLen={filteredProducts.length} />
    </section>
  );
};
