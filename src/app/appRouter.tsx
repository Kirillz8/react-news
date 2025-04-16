import BaseLayout from "@/app/layouts/BaseLayout.tsx";
import { MainPage } from "@/pages/main";
import { NewsPage } from "@/pages/news";
import { createBrowserRouter } from "react-router-dom";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "news/:id", element: <NewsPage /> },
    ],
  },
]);
