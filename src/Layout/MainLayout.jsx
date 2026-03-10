import { Outlet, NavLink } from "react-router-dom";
import React from "react";
import Navbar from "../Shared/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  );
};

export default RootLayout;
