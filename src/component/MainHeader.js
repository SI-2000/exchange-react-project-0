import React, { useState } from "react";
import ReactDOM from "react-dom";
import MainNavigation from "./MainNavigation";
import ProfileSec from "./ProfileSec";
import { useLocation, useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { ReactComponent as HamburgerIcon } from "../files/icons/menu_FILL0_wght400_GRAD0_opsz48.svg";
import classes from "./MainHeader.module.css";
import { useSelector } from "react-redux";
import CustomLink from "./CustomLink";

const MainHeader = () => {
  const uid = useSelector((state) => state.auth.uid);
  const navigate = useNavigate();
  const [navIsOpen, setNavIsOpen] = useState(false);
  const location = useLocation();
  const fullURL = location.pathname + location.search;
  const isInAuthPages =
    fullURL === "/auth/?mode=login" || fullURL === "/auth/?mode=signup";

  function openNavOverlyHandler() {
    setNavIsOpen(true);
  }

  function closeNavOverleyHandler() {
    setNavIsOpen(false);
  }

  return (
    <header className={classes["main-header"]}>
      <div className={classes["menubtn-logo-container"]}>
        <div className={classes["main-nav-container"]}>
          <input type="checkbox" id="show-menu-cbx" checked={navIsOpen} />
          <label
            className={classes["show-menu-label"]}
            htmlFor="show-menu-cbx"
            onClick={openNavOverlyHandler}
          >
            <HamburgerIcon />
          </label>
          {ReactDOM.createPortal(
            <MainNavigation
              className={navIsOpen ? "shown" : ""}
              navIsOpen={navIsOpen}
              onCloseNav={closeNavOverleyHandler}
            />,
            document.getElementById("main-nav-overlay")
          )}
        </div>
        <div className={classes["logo"]}>
          <h1>ایزی بیت</h1>
        </div>
      </div>
      <div className={classes["user-links"]}>
        {uid && <ProfileSec />}
        {!uid && !isInAuthPages && (
          <div className={classes["header-auth-links"]}>
            <CustomLink to="auth/?mode=login" className="header-login">
              ورود
            </CustomLink>
            <CustomLink to="auth/?mode=signup" className="golden-link">
              ثبت نام کنید
            </CustomLink>
          </div>
        )}
        {isInAuthPages && (
          <CustomButton
            className="golden-btn"
            onClick={() => {
              // navigate(-1);
              navigate("/");
            }}
          >
            بازگشت
          </CustomButton>
        )}
      </div>
    </header>
  );
};

export default MainHeader;
