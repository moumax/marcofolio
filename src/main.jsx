import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ModeContextProvider from "./context/ModeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModeContextProvider>
      <div className="overflow-hidden">
        <App />
      </div>
    </ModeContextProvider>
  </React.StrictMode>
);
