import React from "react";
import Home from "../pages/Home";
import RootLayout from "../Layout/MainLayout";
import AuthLayout from "../Layout/AuthLayout";
import { createBrowserRouter } from "react-router-dom";
import Signup from "../Pages/AuthPages/Signup";


const router = createBrowserRouter([
  // Main website layout
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },

  // Auth layout
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Signup />,
      },
      {
        path: "register",
        // element: <Register />,
      },
    ],
  },

  {
    path: "*",
    element: <h1>404 - Page Not Found</h1>,
  },
]);

export default router;