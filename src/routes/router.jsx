import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomeOutlet from "../Outlets/HomeOutlet";
import DiscoverOutlet from "../Outlets/DiscoverOutlet";
import ServicesOutlet from "../Outlets/ServicesOutlet";
import GameDetailsOutlet from "../Outlets/GameDetailsOutlet";
import PageNotFound from "../components/PageNotFound";

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
    ],
  },
]);

export default router;
