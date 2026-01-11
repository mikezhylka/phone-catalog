import { NavigationButton } from "@/components/NavigationButton";
import { navigationLinks } from "@/constants/navigationLinks";
import { useEffect, type Dispatch, type FC, type SetStateAction } from "react";
import { NavLink } from "react-router";

import CartIcon from "@/assets/img/icons/cart.svg?react";
import FavoritesIcon from "@/assets/img/icons/favorites.svg?react";

interface Props {
  favProductsLen: number;
  cartProductsLen: number;
  setIsMenuOpened: Dispatch<SetStateAction<boolean>>;
}

export const Aside: FC<Props> = ({
  favProductsLen,
  cartProductsLen,
  setIsMenuOpened,
}) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return (
    <aside className="h-[calc(100vh-3rem)] w-full pt-8 relative overflow-y-clip">
      <nav>
        <ul className="flex flex-col gap-4 items-center justify-center">
          {navigationLinks.map((link) => (
            <li key={link.to} className="">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-uppercase text-primary"
                    : "text-uppercase text-secondary"
                }
                onClick={() => setIsMenuOpened((prev) => !prev)}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex absolute bottom-0 w-full">
        <NavigationButton
          cn="flex-1 border-t-1 border-t-elements"
          Icon={FavoritesIcon}
          to="/favorites"
          productsLen={favProductsLen}
        />
        <NavigationButton
          cn="flex-1 border-t-1 border-t-elements"
          Icon={CartIcon}
          to="/cart"
          productsLen={cartProductsLen}
        />
      </div>
    </aside>
  );
};
