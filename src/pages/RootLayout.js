import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainHeader from "../component/MainHeader";
import MainFooter from "../component/MainFooter";
import { useDispatch, useSelector } from "react-redux";
import { assetsActions } from "../store/assets";
import useAssets from "../hooks/use-assets";

const RootLayout = () => {
  const uid = useSelector((state) => state.auth.uid);

  const location = useLocation();
  const fullPath = location.pathname + location.search;
  const userIsInTradePath = fullPath.startsWith("/coins");
  const showMainFooter = !userIsInTradePath;

  const dispatch = useDispatch();
  const usersData = useAssets();

  if (usersData.error) {
    return <p>مشکلی در اتصال شما به سرور وجود دارد.</p>;
  }

  if (usersData.data) {
    const userAssets = usersData.data[`${uid}`].assets;
    dispatch(assetsActions.setAssets(userAssets));
  }

  return (
    <div>
      <MainHeader />
      <Outlet />
      {showMainFooter && <MainFooter />}
    </div>
  );
};

export default RootLayout;
