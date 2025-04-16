import { appRouter } from "@/app/appRouter.tsx";
import { store } from "@/app/appStore.ts";
import { ThemeProvider } from "@/app/providers/ThemeProvider.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "@/shared/index.css";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
