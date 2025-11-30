import { AddToCartButton } from "@/components/AddToCartButton";
import { AddToFavoritesButton } from "@/components/AddToFavoritesButton";
import { BackButton } from "@/components/BackButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductsSlider } from "@/components/ProductsSlider";
import { categories } from "@/constants/categories";
import { useAppSelector } from "@/store/hooks";
import { createProductSpecs } from "@/utils/createProductSpecs";
import { findProduct } from "@/utils/findProduct";
import { generateRecommendedProducts } from "@/utils/generateRecommendedProducts";
import { useEffect, type FC } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import products from "../../api/products.json";
import { CapacityPicker } from "./components/CapacityPicker";
import { ColorPicker } from "./components/ColorPicker";
import { PhotosSlider } from "./components/PhotosSlider";
import { SpecsList } from "./components/SpecsList";

export const ProductPage: FC = () => {
  const { cartProducts } = useAppSelector((state) => state.cart);
  const { favProducts } = useAppSelector((state) => state.favorites);
  const { id } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  if (!id) return null;

  const foundProduct = products.find((p) => p.id === +id);

  if (!foundProduct) return;

  const { category, name: foundName } = foundProduct;

  const currentArray = categories[category as keyof typeof categories];

  const currentProduct = currentArray.find((p) => p.name === foundName);

  if (!currentProduct) return;

  const isProductInCart = findProduct(cartProducts, foundProduct);
  const isProductInFavorites = findProduct(favProducts, foundProduct);

  const {
    name,
    images,
    id: productId,
    namespaceId,
    colorsAvailable,
    color,
    priceRegular,
    priceDiscount,
    description,
  } = currentProduct;

  const primarySpecs = createProductSpecs(t, currentProduct, "primary");
  const allSpecs = createProductSpecs(t, currentProduct, "all");

  return (
    <section className="px-4 md:px-6 lg:px-8 xl:px-38">
      <Breadcrumbs productName={name} productCategory={category} />
      <BackButton />
      <h2 className="mt-4 mb-8 heading-h2 md:mb-10">{name}</h2>
      <div className="md:grid grid-cols-12 gap-4 lg:grid-cols-24 lg:mb-20">
        <PhotosSlider images={images} />
        <div className="md:col-span-5 lg:col-start-14 lg:col-end-21">
          <div className="flex flex-col gap-2 pb-6 border-b-1 border-b-elements">
            <div className="flex justify-between">
              <p className="text-small text-secondary">
                {t("available.colors")}
              </p>
              <p className="text-small text-icons">ID: {namespaceId}</p>
            </div>
            <ColorPicker
              colors={colorsAvailable}
              productColor={color}
              productId={productId}
            />
          </div>
          <div className="py-6 border-b-1 border-b-elements">
            <p className="text-small text-secondary mb-2">
              {t("select.capacity")}
            </p>
            <CapacityPicker currentProduct={currentProduct} />
          </div>
          <div className="flex gap-2 items-center pt-8 pb-4">
            <h2 className="heading-h2 text-8">${priceDiscount}</h2>
            <h3 className="heading-h3 line-through text-secondary">
              ${priceRegular}
            </h3>
          </div>
          <div className="flex gap-2">
            <AddToCartButton
              isProductInCart={isProductInCart}
              product={foundProduct}
            />
            <AddToFavoritesButton
              product={foundProduct}
              isInFavorites={isProductInFavorites}
            />
          </div>
          <SpecsList specs={primarySpecs} />
        </div>
      </div>
      <div className="lg:grid grid-cols-24 gap-4">
        <section className="lg:col-span-12">
          <h3 className="heading-h3 pb-4 border-b-1 border-b-elements">
            {t("about")}
          </h3>
          <dl className="mt-8 mb-14">
            {description.map((part) => (
              <div key={part.title} className="my-8">
                <dt className="heading-h4 mb-4">{part.title}</dt>
                <dd className="text-body text-secondary">{part.text}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section className="lg:col-span-12">
          <h3 className="heading-h3 pb-4 border-b-1 border-b-elements">
            {t("tech.specs")}
          </h3>
          <SpecsList specs={allSpecs} />
        </section>
        <div className="lg:col-span-24">
          <ProductsSlider
            sortedProducts={generateRecommendedProducts(currentProduct)}
            titleCode="you.may.also.like"
          />
        </div>
      </div>
    </section>
  );
};
