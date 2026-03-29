import React from "react";
import SideBar from "../Shared/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";

const RootLayout = () => {
  return (
    <div className="flex h-screen w-full bg-[#0A0A0A] overflow-hidden">
      <SideBar />
      <div className="flex flex-col flex-1 min-w-0 h-full">
        <Header />
        <main className="flex-1 overflow-y-auto p-8 bg-[#0A0A0A]">
          <div>
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
};

export default RootLayout;