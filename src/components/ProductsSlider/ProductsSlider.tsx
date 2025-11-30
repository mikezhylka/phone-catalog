import { endpoints } from "@/constants/endpoints";
import type { Product } from "@/types/Product";
import { useEffect, useState, type FC } from "react";
import { useTranslation } from "react-i18next";
import products from "../../../public/api/products.json";
import { PaginationButton } from "../PaginationButton";
import { ProductCard } from "../ProductCard";

interface Props {
  sortedProducts: Product[];
  titleCode: string;
}

export const ProductsSlider: FC<Props> = ({ sortedProducts, titleCode }) => {
  const { t } = useTranslation();
  const [productsPerPage, setProductsPerPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const updateProductsPerPage = () => {
      const { innerWidth } = window;

      if (innerWidth >= endpoints.desktop) {
        setProductsPerPage(4);
      } else if (innerWidth >= endpoints.tablet) {
        setProductsPerPage(2);
      } else {
        setProductsPerPage(1);
      }
    };

    updateProductsPerPage();
    window.addEventListener("resize", updateProductsPerPage);

    return () => window.removeEventListener("resize", updateProductsPerPage);
  }, []);

  const slicedProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage * productsPerPage >= products.length;

  return (
    <section className="w-full my-14 px-4 md:px-0 md:my-16 lg:my-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="heading-h2 max-w-[40vw]">
          {t(`products.slider.${titleCode}`)}
        </h2>
        <div className="flex items-center gap-4">
          <PaginationButton
            type="prev"
            isDisabled={isPrevDisabled}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          />
          <PaginationButton
            type="next"
            isDisabled={isNextDisabled}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          />
        </div>
      </div>
      <div className="md:grid md:grid-cols-12 lg:grid-cols-24 gap-4 snap-x snap-mandatory overflow-x-auto">
        {slicedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
