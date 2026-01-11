import clsx from "clsx";
import type { ElementType, FC } from "react";
import { NavLink } from "react-router";

interface Props {
  Icon: ElementType;
  to: string;
  productsLen: number;
  cn?: string;
}

export const NavigationButton: FC<Props> = ({ Icon, to, productsLen, cn }) => {
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
        <div className="relative w-4 h-4 bg-center bg-no-repeat">
          <Icon />
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
