import type { Product } from "@/types/Product";
import { useSearchParams } from "react-router-dom";

export const useSortProducts = (products: Product[]) => {
  const [searchParams] = useSearchParams();

  const perPage = Number(searchParams.get("perPage")) || 16;
  const page = Number(searchParams.get("page")) || 1;
  const sort = searchParams.get("sort") || "age";

  const filteredProducts = products.sort((p1, p2) => {
    switch (sort) {
      case "age":
        return p2.year - p1.year;
      case "title":
        return p1.name.localeCompare(p2.name);
      case "price":
        return p1.price - p2.price;
      default:
        return 0;
    }
  });

  const start = (page - 1) * perPage;
  const end = start + perPage;

  const slicedProducts = filteredProducts.slice(start, end);

  return slicedProducts;
};
