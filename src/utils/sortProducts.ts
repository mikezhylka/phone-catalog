import products from "../../public/api/products.json";

export const sortProducts = (sortBy: "year" | "prices") => {
  return [...products].sort((p1, p2) => {
    switch (sortBy) {
      case "prices":
        return p2.fullPrice - p2.price - (p1.fullPrice - p1.price);
      case "year":
        return p2.year - p1.year;
      default:
        return 0;
    }
  });
};
