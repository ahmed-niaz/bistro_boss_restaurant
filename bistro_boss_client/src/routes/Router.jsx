import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import OurMenu from "../pages/OurMenu";
import OurShop from "../pages/OurShop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../layout/Dashboard";
import MyCart from "../dashboardPages/MyCart";
import UserHome from "../dashboardPages/UserHome";
import AddReview from "../dashboardPages/AddReview";
import Reservation from "../dashboardPages/Reservation";
import MyBooking from "../dashboardPages/MyBooking";
import PaymentHistory from "../dashboardPages/PaymentHistory";
import ProtectedRoutes from './ProtectedRoutes';

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
        path: "/our-shop/:category",
        element: <OurShop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <ProtectedRoutes>
      <Dashboard />
    </ProtectedRoutes>,
    children: [
      {
        path: "my-cart",
        element: <MyCart />,
      },
      {
        path: "user-home",
        element: <UserHome />,
      },
      {
        path:'add-review',
        element:<AddReview/>
      },
      {
       path:'reservation',
       element:<Reservation/>
      },
      {
        path:'my-booking',
        element:<MyBooking/>
      },
      {
        path:'payment-history',
        element:<PaymentHistory/>
      }
    ],
  },
]);
