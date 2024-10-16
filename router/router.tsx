import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import MainPage from "../src/components/Button/MainPage/MainPage";


const routers = [
  {
    element: (<MainPage/>
    ),
    path: "/",
    errorElement: "",
  },
  {
    path: "/blogpage/:page?",
    element: (
      ""
    ),
    errorElement: "",
  },
  {
    path: "/Example",
    element: (
  <App/>
    ),
    errorElement: "",
  },
];

export const route = createBrowserRouter(routers);
