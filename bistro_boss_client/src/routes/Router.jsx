import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import OurMenu from "../pages/OurMenu";
import OurShop from "../pages/OurShop";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/our-menu",
        element: <OurMenu />,
      },
      {
        path:'/our-shop/:category',
        element:<OurShop/>
      },{
        path:'/login',
        element:<Login/>
      }
    ],
  },
]);
