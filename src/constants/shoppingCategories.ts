import axios from "axios";
import type { Category } from "../types/Category";

const [phones, tablets, accessories] = await Promise.all([
  axios.get("/api/phones.json").then((res) => res.data),
  axios.get("/api/tablets.json").then((res) => res.data),
  axios.get("/api/accessories.json").then((res) => res.data),
]);

export const shoppingCategories: Category[] = [
  {
    title: "mobile.phones",
    banner: "/img/banner-bg-phones.jpg",
    to: "/phones",
    productsLen: phones.length,
  },

  {
    title: "tablets",
    banner: "/img/banner-bg-tablets.jpg",
    to: "/tablets",
    productsLen: tablets.length,
  },

  {
    title: "accessories",
    banner: "/img/banner-bg-accessories.jpg",
    to: "/accessories",
    productsLen: accessories.length,
  },
];
