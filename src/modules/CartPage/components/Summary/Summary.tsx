import { useAppSelector } from "@/store/hooks";
import type { Dispatch, FC, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  setShowCheckoutModal: Dispatch<SetStateAction<boolean>>;
}

export const Summary: FC<Props> = ({ setShowCheckoutModal }) => {
  const { cartProducts } = useAppSelector((state) => state.cart);
  const { t } = useTranslation();

  const totalItems = cartProducts.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  const totalPrice = cartProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  // const handleCheckout = () => {
  //   setShowCheckoutModal(true);
  //   dispatch(updateCartProducts([]));
  //   localStorage.setItem("cartProducts", JSON.stringify([]));
  //   navigate("/");
  // };

  return (
    <div className="lg:col-span-8 border-1 border-elements p-6 flex flex-col mt-8 lg:mt-0 h-fit">
      <h2 className="heading-h2 text-center">${totalPrice}</h2>
      <p className="text-body text-center pb-6 border-b-1 border-elements">
        {`${t("total")} ${totalItems} ${totalItems === 1 ? t("item") : t("items")}`}
      </p>
      <button
        className="w-full h-12 bg-primary text-button text-white mt-6 hover:shadow-xl hover:cursor-pointer"
        onClick={() => setShowCheckoutModal(true)}
      >
        {t("checkout")}
      </button>
    </div>
  );
};
