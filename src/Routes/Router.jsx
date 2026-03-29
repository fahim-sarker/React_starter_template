import React from "react";
import Users from "../Pages/Users";
import Dashboard from "../Pages/Dashboard";
import RootLayout from "../Layout/DashBoardLayout";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },

  {
    path: "*",
    element: <h1>404 - Page Not Found</h1>,
  },
]);

export default router;