import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./global.css";
import { AuthProvider } from "./contexts/Auth/AuthProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
