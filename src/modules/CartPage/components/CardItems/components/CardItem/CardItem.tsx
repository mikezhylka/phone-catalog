import { updateCartProducts } from "@/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import type { CartProduct } from "@/types/CartProduct";
import type { FC } from "react";
import { QuantityButton } from "./components/QuantityButton";

interface Props {
  product: CartProduct;
}

export const CardItem: FC<Props> = ({ product }) => {
  const { image, price, name, quantity } = product;

  const dispatch = useAppDispatch();
  const { cartProducts } = useAppSelector((state) => state.cart);

  const toggleQuantity = (type: "add" | "minus") => {
    const updatedProduct = {
      ...product,
      quantity: type === "add" ? product.quantity + 1 : product.quantity - 1,
    };

    const updatedProducts = cartProducts.map((p) =>
      p.id === product.id ? updatedProduct : p
    );

    dispatch(updateCartProducts(updatedProducts));
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
  };

  const removeProduct = () => {
    const updatedProducts = cartProducts.filter((p) => p.id !== product.id);
    dispatch(updateCartProducts(updatedProducts));
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
  };

  return (
    <li className="flex items-center flex-col md:flex-row p-4 md:p-6 gap-4 md:gap-6 border-1 border-elements">
      <div className="w-full flex items-center gap-4 md:gap-6">
        <button
          className="bg-[url('/img/icons/close.svg')] w-4 h-4 bg-size-4 hover:cursor-pointer hover:scale-125 transition-transform shrink-0"
          onClick={removeProduct}
        />
        <img
          className="w-20 h-20 object-contain shrink-0"
          src={image}
          alt="name"
        />
        <p className="text-body grow-2">{name}</p>
      </div>
      <div className="w-full flex items-center justify-between md:justify-start md:w-auto">
        <div className="flex items-center justify-between">
          <QuantityButton
            type="minus"
            onClick={() => toggleQuantity("minus")}
            isDisabled={product.quantity === 1}
          />
          <span className="text-body mx-3">{quantity}</span>
          <QuantityButton type="add" onClick={() => toggleQuantity("add")} />
        </div>
        <h3 className="heading-h3 ml-7">${price}</h3>
      </div>
    </li>
  );
};
