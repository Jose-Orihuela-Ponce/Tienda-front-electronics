import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProviderFunction } from "./context/contextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderFunction>
      <App />
    </ProviderFunction>
  </React.StrictMode>
);
