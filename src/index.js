import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BasketSliderProvider from "./context/BasketSliderContext";
import SearchFilterProvider from "./context/SearchFilterContext";
import BasketProvider from "./context/BasketContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BasketSliderProvider>
    <SearchFilterProvider>
      <BasketProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BasketProvider>
    </SearchFilterProvider>
  </BasketSliderProvider>
);
