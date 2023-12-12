import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BasketSliderProvider from "./context/BasketSliderContext";
import SearchFilterProvider from "./context/SearchFilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BasketSliderProvider>
    <SearchFilterProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SearchFilterProvider>
  </BasketSliderProvider>
);
