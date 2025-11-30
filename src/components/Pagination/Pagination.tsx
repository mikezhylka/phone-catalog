import clsx from "clsx";
import { useEffect, useState, type FC } from "react";
import { useSearchParams } from "react-router";
import { PaginationButton } from "../PaginationButton";

interface Props {
  productsLen: number;
}

export const Pagination: FC<Props> = ({ productsLen }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const perPage = Number(searchParams.get("perPage")) || 16;
  const page = Number(searchParams.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const pages = Math.ceil(productsLen / perPage);

  const handlePageBtnClick = (index: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", String(index + 1));
    setSearchParams(newSearchParams);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePaginationBtnClick = (type: "prev" | "next") => {
    const newSearchParams = new URLSearchParams(searchParams);
  
    newSearchParams.set(
      "page",
      String(type === "prev" ? currentPage - 1 : currentPage + 1)
    );
    setSearchParams(newSearchParams);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="flex gap-4 justify-center mb-16">
      <PaginationButton
        type="prev"
        isDisabled={currentPage === 1}
        onClick={() => handlePaginationBtnClick("prev")}
      />
      <div className="flex gap-2">
        {Array.from({ length: pages }).map((_, index) => (
          <button
            key={index}
            className={clsx(
              currentPage === index + 1 && "bg-primary text-white border-0 pointer-events-none",
              "w-8 h-8 border border-elements hover:bg-elements hover:cursor-pointer"
            )}
            onClick={() => handlePageBtnClick(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <PaginationButton
        type="next"
        isDisabled={currentPage === pages}
        onClick={() => handlePaginationBtnClick("next")}
      />
    </section>
  );
};
