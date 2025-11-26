import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomeOutlet from "../Outlets/HomeOutlet";
import DiscoverOutlet from "../Outlets/DiscoverOutlet";
import ServicesOutlet from "../Outlets/ServicesOutlet";
import GameDetailsOutlet from "../Outlets/GameDetailsOutlet";
import PageNotFound from "../components/PageNotFound";
import LoginOutlet from "../Outlets/LoginOutlet";
import RegisterOutlet from "../Outlets/RegisterOutlet";
import ForgotPassword from "../Outlets/ForgotPassword";
import MyProfile from "../Outlets/MyProfile";
import UpdateProfile from "../Outlets/UpdateProfile";
import Loader from "../components/Loader";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "",
        element: <HomeOutlet />,
        loader: () => fetch("/games.json"),
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/discover",
        element: <DiscoverOutlet />,
        loader: () => fetch("/games.json"),
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/services",
        element: <ServicesOutlet />,
      },
    ],
  },
  {
    path: "/discover/:id",
    element: (
      <PrivateRoute>
        <GameDetailsOutlet />
      </PrivateRoute>
    ),
    loader: () => fetch("/games.json"),
    hydrateFallbackElement: <Loader />,
  },
  {
    path: "/login",
    element: <LoginOutlet />,
  },
  {
    path: "/register",
    element: <RegisterOutlet />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/my-profile",
    element: (
      <PrivateRoute>
        <MyProfile />
      </PrivateRoute>
    ),
  },
  {
    path: "/update-profile",
    element: (
      <PrivateRoute>
        <UpdateProfile />
      </PrivateRoute>
    ),
  },
]);

export default router;
