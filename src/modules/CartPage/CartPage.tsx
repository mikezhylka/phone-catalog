import { BackButton } from "@/components/BackButton";
import { NoProductsAdded } from "@/components/NoProductsAdded";
import { useAppSelector } from "@/store/hooks";
import { useEffect, useState, type FC } from "react";
import { CardItems } from "./components/CardItems";
import { Summary } from "./components/Summary";
import { CheckoutModal } from "./components/Summary/components/CheckoutModal";
import { useTranslation } from "react-i18next";

export const CartPage: FC = () => {
  const { t } = useTranslation();
  const { cartProducts } = useAppSelector((state) => state.cart);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <section className="px-4 md:px-6 lg:px-8 xl:px-38 pt-6 pb-14 md:pt-10 md:pb-16 lg:pb-20 min-h-[calc(100vh_-_112px)] lg:min-h-[calc(100vh_-_128px)]">
      {!cartProducts.length ? (
        <NoProductsAdded where="cart" />
      ) : (
        <>
          <BackButton />
          <h1 className="heading-h1 mt-6 md:mt-4 mb-8">{t("cart")}</h1>
          <section className="lg:grid lg:grid-cols-24 gap-4">
            <CardItems />
            <Summary setShowCheckoutModal={setShowCheckoutModal} />
          </section>
        </>
      )}
      {showCheckoutModal && (
        <CheckoutModal setShowCheckoutModal={setShowCheckoutModal} />
      )}
    </section>
  );
};
