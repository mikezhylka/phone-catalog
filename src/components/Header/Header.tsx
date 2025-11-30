import { useAppSelector } from "@/store/hooks";
import clsx from "clsx";
import { useState, type FC } from "react";
import { Link } from "react-router-dom";
import { NavigationButton } from "../NavigationButton";
import { Aside } from "./components/Aside";
import { HeaderNav } from "./components/HeaderNav";
import { LangDropdown } from "./components/LangDropdown/LangDropdown";

export const Header: FC = () => {
  const { cartProducts } = useAppSelector((state) => state.cart);
  const { favProducts } = useAppSelector((state) => state.favorites);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const cartProductsLen = cartProducts.length;
  const favProductsLen = favProducts.length;

  return (
    <>
      <header className="sticky top-0 z-2 bg-white w-full h-12 lg:h-16 flex items-center justify-between shadow-[0_1px_#E2E6E9]">
        <Link
          to="/"
          className="w-16 lg:w-20 mx-4 lg:mx-6 h-full bg-[url('/public/img/icons/nice-gadgets.svg')] bg-center bg-no-repeat shrink-0"
        />
        <button
          className={clsx(
            "md:hidden w-12 h-12 flex justify-center items-center shadow-light-shadow-leftbg-center bg-center bg-no-repeat",
            isMenuOpened
              ? `bg-[url('/public/img/icons/close.svg')]`
              : `bg-[url('/public/img/icons/menu.svg')]`
          )}
          onClick={() => setIsMenuOpened((prev) => !prev)}
        />
        <div className="hidden md:flex w-full h-full justify-between items-center">
          <HeaderNav />
          <div className="h-full flex">
            <LangDropdown />
            <NavigationButton
              img="/img/icons/favorites.svg"
              to="/favorites"
              productsLen={favProductsLen}
            />
            <NavigationButton
              img="/img/icons/cart.svg"
              to="/cart"
              productsLen={cartProductsLen}
            />
          </div>
        </div>
      </header>
      {isMenuOpened && (
        <Aside
          cartProductsLen={cartProductsLen}
          favProductsLen={favProductsLen}
          setIsMenuOpened={setIsMenuOpened}
        />
      )}
    </>
  );
};
