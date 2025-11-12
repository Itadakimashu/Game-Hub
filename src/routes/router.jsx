import { createBrowserRouter } from "react-router";
import Homepage from "../layouts/HomePage";
import HomeOutlet from "../Outlets/HomeOutlet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        path: "",
        element: <HomeOutlet />,
        loader: () => fetch("/games.json"),
      },
    ],
  },
]);

export default router;
