import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GlobalStyle from "./global.js";
import App from "./App";
import Providers from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Providers>
      <GlobalStyle />
      <App />
    </Providers>
  </React.StrictMode>
);
