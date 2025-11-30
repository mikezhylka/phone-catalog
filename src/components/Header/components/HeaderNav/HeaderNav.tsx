import { navigationLinks } from "@/constants/navigationLinks";
import clsx from "clsx";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

export const HeaderNav: FC = () => {
  const { t } = useTranslation();

  return (
    <nav className="h-full ml-6">
      <ul className="h-full flex items-center gap-0.5">
        {navigationLinks.map((link) => (
          <li
            key={link.title}
            className="h-full flex items-center justify-center"
          >
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                clsx(
                  "px-4 h-full flex items-center text-uppercase hover:text-primary",
                  isActive
                    ? " text-primary shadow-[inset_0_-3px_0_0_#313237]"
                    : "text-secondary"
                )
              }
            >
              {t(`header.links.${link.title}`)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
