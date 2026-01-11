import axios from "axios";
import type { Category } from "../types/Category";

import bannerAccessories from "@/assets/img/banner-bg-accessories.jpg";
import bannerPhones from "@/assets/img/banner-bg-phones.jpg";
import bannerTablets from "@/assets/img/banner-bg-tablets.jpg";

const BASE_URL = import.meta.env.BASE_URL;

const [phones, tablets, accessories] = await Promise.all([
  axios.get(`${BASE_URL}api/phones.json`).then((res) => res.data),
  axios.get(`${BASE_URL}api/tablets.json`).then((res) => res.data),
  axios.get(`${BASE_URL}api/accessories.json`).then((res) => res.data),
]);

export const shoppingCategories: Category[] = [
  {
    title: "mobile.phones",
    banner: bannerPhones,
    to: "/phones",
    productsLen: phones.length,
  },

  {
    title: "tablets",
    banner: bannerTablets,
    to: "/tablets",
    productsLen: tablets.length,
  },

  {
    title: "accessories",
    banner: bannerAccessories,
    to: "/accessories",
    productsLen: accessories.length,
  },
];
