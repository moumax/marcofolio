import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ModeContextProvider from "./context/ModeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModeContextProvider>
      <div className="mx-96 xs:mx-10">
        <App />
      </div>
    </ModeContextProvider>
  </React.StrictMode>
);
