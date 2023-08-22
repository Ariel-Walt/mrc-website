import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { NavProvider } from "./RemoveNavContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NavProvider>
  </React.StrictMode>,
);

reportWebVitals();
