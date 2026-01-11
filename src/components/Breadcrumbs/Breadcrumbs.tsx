import ArrowRightDisabled from "@/assets/img/icons/arrow-right-disabled.svg?react";
import clsx from "clsx";
import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  productName?: string;
  productCategory?: string;
}

export const Breadcrumbs: FC<Props> = ({ productName, productCategory }) => {
  const { pathname } = useLocation();
  const pathParts = pathname.split("/").filter(Boolean);

  return (
    <nav className="flex items-center gap-2 text-body text-secondary my-6 md:mb-10">
      <Link
        to="/"
        className="w-4 h-4 bg-home-icon bg-no-repeat bg-center hover:scale-110 transition-transform"
      />
      {pathParts.map((part, index) => {
        const isLast = part === pathParts[pathParts.length - 1];
        const path = `/${pathParts.slice(0, index + 1).join("/")}`;
        const partName = part === "product" ? productCategory! : part;

        const isNumeric = /^\d+$/.test(partName);
        const isProductId = pathParts[0] === "product" && isNumeric;
        const label = isProductId ? productName : partName;

        return (
          <span key={part} className="flex items-center gap-2">
            <ArrowRightDisabled />
            <Link
              to={path === "/product" ? `/${productCategory}` : path}
              className={clsx(
                isLast
                  ? "text-secondary pointer-events-none"
                  : "text-primary hover:underline",
                "capitalize"
              )}
            >
              {label}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};
