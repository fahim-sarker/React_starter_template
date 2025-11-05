import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../Layout/RootLayout";
import React from "react";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <h1>404 - Page Not Found</h1>,
      },
    ],
  },
]);

export default router;
