import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { router } from "./Routes/router.jsx";
import AuthProvider from "./Auth/AuthProvider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
      <Toaster></Toaster>
    </QueryClientProvider>
  </StrictMode>
);
