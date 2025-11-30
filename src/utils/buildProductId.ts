export const buildProductId = (id: string, capacity: string, color: string) => {
  const preLastIndex = id.lastIndexOf("-", id.lastIndexOf("-") - 1);

  return id.slice(0, preLastIndex) + `-${capacity.toLowerCase()}-${color}`;
};
