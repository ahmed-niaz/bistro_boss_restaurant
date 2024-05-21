import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router.jsx";
import { HelmetProvider } from "react-helmet-async";
import FirebaseProvider from "./providers/FirebaseProvider.jsx";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <FirebaseProvider>
        <RouterProvider router={router} />
        <Toaster />
      </FirebaseProvider>
    </HelmetProvider>
  </React.StrictMode>
);
