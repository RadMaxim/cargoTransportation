import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { route } from "./../router/router.tsx";

import "./index.css";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
);
