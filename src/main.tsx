import i18n from "i18next";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App.tsx";
import "./index.css";
import { store } from "./store/store.ts";

const savedLang = localStorage.getItem("lang") || "en";

i18n.changeLanguage(savedLang).then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
});
