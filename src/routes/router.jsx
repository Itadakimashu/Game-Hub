import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomeOutlet from "../Outlets/HomeOutlet";
import DiscoverOutlet from "../Outlets/DiscoverOutlet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomeOutlet />,
        loader: () => fetch("/games.json"),
      },
      {
        path: "/discover",
        element: <DiscoverOutlet />,
        loader: () => fetch("/games.json"),
      },
    ],
  },
]);

export default router;
