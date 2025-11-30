import { footerLinks } from "@/constants/footerLinks";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export const Footer: FC = () => {
  const { t } = useTranslation();

  const handleScrollingUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="px-4 md:px-8 py-8 flex gap-8 flex-col md:flex-row relative bottom-0 md:justify-between inset-shadow-[0_1px_#E2E6E9] md:grow-1">
      <Link
        to="/"
        className="w-22 md:grow-1 h-8 bg-[url('/public/img/icons/nice-gadgets.svg')] bg-no-repeat bg-center"
      />
      <ul className="flex gap-4 flex-col md:flex-row justify-between items-center md: grow-1">
        {footerLinks.map((link) => {
          const { id, title, to, isRedirect } = link;

          return (
            <li key={id}>
              {isRedirect ? (
                <a
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-uppercase text-secondary hover:text-black"
                >
                  {t(`footer.links.${title}`)}
                </a>
              ) : (
                <Link
                  to={to}
                  className="text-uppercase text-secondary hover:text-black"
                >
                  {t(`footer.links.${title}`)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
      <div className="flex gap-4 md:grow-1 items-center justify-center">
        <p className="small-text text-secondary">{t("footer.back.to.top")}</p>
        <button
          className="w-8 h-8 bg-[url('/public/img/icons/arrow-up.svg')] bg-center bg-no-repeat border-1 border-icons hover:bg-icons hover:cursor-pointer"
          onClick={handleScrollingUp}
        />
      </div>
    </footer>
  );
};
