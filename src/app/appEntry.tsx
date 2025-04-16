import { store } from "@/app/appStore.ts";
import BaseLayout from "@/app/layouts/BaseLayout.tsx";
import { ThemeProvider } from "@/app/providers/ThemeProvider.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "@/shared/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BaseLayout />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
