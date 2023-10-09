import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainHeader from "../component/MainHeader";
import MainFooter from "../component/MainFooter";

const RootLayout = () => {
  const location = useLocation();
  const fullPath = location.pathname + location.search;
  const userIsInTradePath = fullPath.startsWith("/coins");
  const showMainFooter = !userIsInTradePath;

  return (
    <div>
      <MainHeader />
      <Outlet />
      {showMainFooter && <MainFooter />}
    </div>
  );
};

export default RootLayout;
