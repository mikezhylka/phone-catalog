import clsx from "clsx";
import type { FC } from "react";
import { NavLink } from "react-router";

interface Props {
  to: string;
  productsLen: number;
  img?: string;
  cn?: string;
}

export const NavigationButton: FC<Props> = ({ img, to, productsLen, cn }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          isActive && "border-b-3 border-b-primary",
          cn && cn,
          "w-12 h-12 lg:w-16 lg:h-16 bg-no-repeat bg-center bg-size-4 shrink-0 border-l-1 border-elements hover:bg-hover-bg hover:cursor-pointer"
        )
      }
      to={to}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div
          style={{ backgroundImage: `url(${img})`, backgroundSize: "contain" }}
          className={`relative w-4 h-4 bg-center bg-no-repeat`}
        >
          {productsLen > 0 && (
            <span className="absolute flex items-center justify-center w-3.5 h-3.5 rounded-full text-ultra-small text-white right-[-6px] top-[-6px] bg-red">
              {productsLen}
            </span>
          )}
        </div>
      </div>
    </NavLink>
  );
};
