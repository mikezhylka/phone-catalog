import { Breadcrumbs } from "@/components/Breadcrumbs";
import { NoProductsAdded } from "@/components/NoProductsAdded";
import { ProductsList } from "@/components/ProductsList/ProductsList";
import { useAppSelector } from "@/store/hooks";
import { useEffect, type FC } from "react";
import { useTranslation } from "react-i18next";

export const FavoritesPage: FC = () => {
  const { t } = useTranslation();
  const { favProducts } = useAppSelector((state) => state.favorites);

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "instant"});
  }, []);

  return (
    <section className="px-4 md:px-6 lg:px-8 xl:px-38">
      {!favProducts.length ? (
        <NoProductsAdded where="favorites" />
      ) : (
        <>
          <Breadcrumbs />
          <h1 className="heading-h1 text-primary">{t("favorites.title")}</h1>
          <p className="text-body text-secondary">{`${favProducts.length} ${
            favProducts.length === 1 ? t("item") : t("items")
          }`}</p>
          <ProductsList products={favProducts} />
        </>
      )}
    </section>
  );
};
