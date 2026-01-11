import ArrowDownIcon from "@/assets/img/icons/arrow-down.svg?react";
import { sortOptions } from "@/constants/sortOptions";
import { useClickOutside } from "@/hooks/useClickOutside";
import type { SortOption } from "@/types/SortOption";
import clsx from "clsx";
import type { FC } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router";

interface Props {
  title: string;
  sort: "byCategory" | "byPages";
}

export const Dropdown: FC<Props> = ({ title, sort }) => {
  const { t } = useTranslation();
  const [isOpened, setIsOpened] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const options = sortOptions[sort];

  const [selected, setSelected] = useState(options[0]);

  const handleSorting = useCallback(
    (value: string | number) => {
      const newParams = new URLSearchParams(searchParams);

      switch (sort) {
        case "byCategory": {
          newParams.set("sort", value.toString());
          break;
        }

        case "byPages": {
          newParams.set("perPage", value.toString());
          break;
        }

        default:
          return undefined;
      }

      setSearchParams(newParams);
    },
    [searchParams, setSearchParams, sort]
  );

  useEffect(() => handleSorting(selected.value), [selected, handleSorting]);

  useClickOutside(wrapperRef, () => setIsOpened(false));

  const handleOptionSelect = (option: SortOption) => {
    setSelected(option);
    setIsOpened(false);
  };

  return (
    <div
      className={clsx(
        sort === "byCategory" ? "md:col-span-4" : "md:col-span-3",
        "w-full flex flex-col gap-1"
      )}
    >
      <label htmlFor={title} className="text-small text-secondary">
        {t(`products.filters.titles.${title}`)}
      </label>
      <div ref={wrapperRef} className="relative w-full">
        <button
          type="button"
          onClick={() => setIsOpened((prev) => !prev)}
          className="w-full flex justify-between items-center px-3 h-10 border border-icons text-button hover:border-secondary hover:cursor-pointer rounded-none"
        >
          <span>
            {t(`products.filters.options.${selected.title.toLowerCase()}`)}
          </span>
          <div
            className={clsx(
              "w-4 h-4 transition-transform duration-200",
              isOpened && "rotate-180"
            )}
          >
            <ArrowDownIcon />
          </div>
        </button>

        {isOpened && (
          <ul className="absolute left-0 top-full w-full border border-icons bg-white shadow-md z-10 max-h-60 overflow-auto">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionSelect(option)}
                className={clsx(
                  "px-3 py-2 text-body text-secondary hover:text-primary hover:bg-hover-bg cursor-pointer",
                  option.value === selected.value && "text-primary"
                )}
              >
                {t(`products.filters.options.${option.title.toLowerCase()}`)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
