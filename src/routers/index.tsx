import { default as Pages } from "../pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Page404 from "../pages/Page404";

export default function Routers() {
  const routers = Object.entries(Pages).map(([nameScreen, Component]) => {
    nameScreen = nameScreen == "Home" ? "/" : nameScreen;

    return {
      path: nameScreen,
      element: <Component />,
    };
  });

  routers.push({
    path: "*",
    element: <Page404 />,
  });

  return <RouterProvider router={createBrowserRouter([...routers])} />;
}
