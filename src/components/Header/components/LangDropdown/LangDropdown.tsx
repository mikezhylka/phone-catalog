import ArrowDownIcon from "@/assets/img/icons/arrow-down.svg?react";
import { languages } from "@/constants/languages";
import { useClickOutside } from "@/hooks/useClickOutside";
import clsx from "clsx";
import { useRef, useState, type FC } from "react";
import { useTranslation } from "react-i18next";
import "../../../../i18n";

export const LangDropdown: FC = () => {
  const { i18n } = useTranslation();
  const [isLangDropdownOpened, setIsLangDropdownOpened] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = localStorage.getItem("lang") || "ENG";
  const currentLangDecode =
    languages.find((lang) => lang.code === currentLang)?.title || "ENG";

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const handleOptionClick = (langCode: string) => {
    changeLanguage(langCode);
    setIsLangDropdownOpened(false);
  };

  useClickOutside(dropdownRef, () => setIsLangDropdownOpened(false));

  return (
    <div className="relative w-full h-full min-w-20" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsLangDropdownOpened((prev) => !prev)}
        className="w-full min-w-20 h-full flex justify-between items-center px-3 border-l border-elements text-button hover:bg-hover-bg hover:cursor-pointer rounded-none"
      >
        <span>{currentLangDecode.toUpperCase()}</span>
        <ArrowDownIcon
          className={clsx(
            "w-4 h-4 transition-transform duration-200",
            isLangDropdownOpened && "rotate-180"
          )}
        />
      </button>
      {isLangDropdownOpened && (
        <ul className="border-1 border-gray-100 bg-white">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleOptionClick(lang.code)}
              className={clsx(
                "px-3 py-2 text-body text-secondary hover:text-primary hover:bg-hover-bg cursor-pointer",
                lang.code === currentLang && "text-primary"
              )}
            >
              {lang.title.toUpperCase()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
