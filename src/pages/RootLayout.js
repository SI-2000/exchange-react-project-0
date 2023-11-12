import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainHeader from "../component/MainHeader";
import MainFooter from "../component/MainFooter";
import { useDispatch, useSelector } from "react-redux";
import { assetsActions } from "../store/assets";
import useAssets from "../hooks/use-assets";
import { useQuery } from "react-query";

const RootLayout = () => {
  const uid = useSelector((state) => state.auth.uid);

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
