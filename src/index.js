import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/* React bootstrap configuration*/

import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./Component/Store/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>
);
