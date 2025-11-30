import { updateCartProducts } from "@/features/cart/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import type { Dispatch, FC, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

interface Props {
  setShowCheckoutModal: Dispatch<SetStateAction<boolean>>;
}

export const CheckoutModal: FC<Props> = ({ setShowCheckoutModal }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleCheckout = () => {
    setShowCheckoutModal(true);
    dispatch(updateCartProducts([]));
    localStorage.setItem("cartProducts", JSON.stringify([]));
    navigate("/");
  };

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] bg-gray-50 flex items-center gap-4 flex-col p-10 border-1 border-gray-400">
      <h2 className="heading-h2 text-center">
        {t("checkout.not.implemented")}
      </h2>
      <div className="w-full flex gap-4 justify-between">
        <button
          className="w-full bg-red-600 text-button text-white border-1 border-gray-700 p-1 hover:cursor-pointer hover:bg-red-700"
          onClick={() => setShowCheckoutModal(false)}
        >
          {t("no")}
        </button>
        <button
          className="w-full bg-green-600 text-button text-white border-1 border-gray-700 p-1 hover:cursor-pointer hover:bg-green-700"
          onClick={handleCheckout}
        >
          {t("yes")}
        </button>
      </div>
    </div>
  );
};
