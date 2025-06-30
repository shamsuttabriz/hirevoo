import React from "react";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div>
      <Navbar />
      <div className="px-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
