import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AccessoriesPage } from "./modules/AccessoriesPage";
import { CartPage } from "./modules/CartPage";
import { FavoritesPage } from "./modules/FavoritesPage";
import { HomePage } from "./modules/HomePage";
import { NotFoundPage } from "./modules/NotFoundPage";
import { PhonesPage } from "./modules/PhonesPage";
import { ProductPage } from "./modules/ProductPage/ProductPage";
import { TabletsPage } from "./modules/TabletsPage";

export const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/phones" element={<PhonesPage />} />
          <Route path="/tablets" element={<TabletsPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};
