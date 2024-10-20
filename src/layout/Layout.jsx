import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 bg-slate-50">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
