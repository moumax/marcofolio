import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import GeneralBackgroundDark from "./components/GeneralBackgroundDark";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GeneralBackgroundDark />
    <App />
  </React.StrictMode>
);
