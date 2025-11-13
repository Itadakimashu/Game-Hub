import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomeOutlet from "../Outlets/HomeOutlet";
import DiscoverOutlet from "../Outlets/DiscoverOutlet";
import ServicesOutlet from "../Outlets/ServicesOutlet";
import GameDetailsOutlet from "../Outlets/GameDetailsOutlet";
import PageNotFound from "../components/PageNotFound";
import LoginOutlet from "../Outlets/LoginOutlet";
import RegisterOutlet from "../Outlets/RegisterOutlet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "",
        element: <HomeOutlet />,
      },
      {
        path: "/discover",
        element: <DiscoverOutlet />,
      },
      {
        path: "/discover/:id",
        Component: GameDetailsOutlet,
        loader: () => fetch("/games.json"),
      },
      {
        path: "/services",
        element: <ServicesOutlet />,
      },
      {
        path: "/login",
        element: <LoginOutlet />,
      },
      {
        path: "/register",
        element: <RegisterOutlet />,
      },
    ],
  },
]);

export default router;
