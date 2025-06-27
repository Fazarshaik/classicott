import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MyListProvider } from "./context/MyListContex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyListProvider>
        <App />
      </MyListProvider>
    </BrowserRouter>
  </React.StrictMode>
);
