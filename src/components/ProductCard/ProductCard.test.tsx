import cartReducer from "@/features/cart/cartSlice";
import favoritesReducer from "@/features/favs/favsSlice";
import { configureStore } from "@reduxjs/toolkit";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter, useNavigate } from "react-router";
import { ProductCard } from "./ProductCard";

const mockProduct = {
  id: 13,
  category: "phones",
  itemId: "apple-iphone-xr-64gb-red",
  name: "Apple iPhone XR 64GB Red",
  fullPrice: 712,
  price: 670,
  screen: "6.1' IPS",
  capacity: "64GB",
  color: "red",
  ram: "3GB",
  year: 2018,
  image: "img/phones/apple-iphone-xr/red/00.webp",
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
  },
  preloadedState: {
    cart: { cartProducts: [] },
    favorites: { favProducts: [] },
  },
});

const Product = (
  <Provider store={store}>
    <MemoryRouter>
      <ProductCard product={mockProduct} />
    </MemoryRouter>
  </Provider>
);

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: jest.fn(),
}));

describe("ProductCard component", () => {
  it("renders all product data", () => {
    render(Product);

    expect(screen.getByText("Apple iPhone XR 64GB Red")).toBeInTheDocument();
    expect(screen.getByText(/Screen/i)).toBeInTheDocument();
    expect(screen.getByText(/Capacity/i)).toBeInTheDocument();
    expect(screen.getByText(/RAM/i)).toBeInTheDocument();
  });

  it("navigates after click", async () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(Product);

    const card = screen.getByRole("article");
    const user = userEvent.setup();

    await user.click(card);

    expect(mockNavigate).toHaveBeenCalledWith(`/product/13`);
  });

  it("allows adding to favorites", async () => {
    render(Product);

    const favButton = screen.getByRole("button", { name: /add to favorites/i });
    const user = userEvent.setup();

    await user.click(favButton);

    const { favProducts } = store.getState().favorites;

    expect(favProducts).toContainEqual(mockProduct);
  });

  it("allows adding to cart", async () => {
    render(Product);

    const addToCartBtn = screen.getByText(/add.to.cart/i);

    const user = userEvent.setup();

    await user.click(addToCartBtn);

    const { cartProducts } = store.getState().cart;

    expect(cartProducts).toContainEqual(expect.objectContaining(mockProduct));
  });
});
