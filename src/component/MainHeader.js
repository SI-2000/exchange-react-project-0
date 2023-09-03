import React, { useState } from "react";
import  ReactDOM  from "react-dom";
import MainNavigation from "./MainNavigation";
import ProfileSec from "./ProfileSec";

import { ReactComponent as CreditIcon } from "../files/icons/credit_card_FILL0_wght400_GRAD0_opsz48.svg";
import { ReactComponent as NotifIcon } from "../files/icons/notifications_FILL0_wght400_GRAD0_opsz48.svg";
import { ReactComponent as HamburgerIcon } from "../files/icons/menu_FILL0_wght400_GRAD0_opsz48.svg";

import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";
import { getElementError } from "@testing-library/react";

const MainHeader = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

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
            for="show-menu-cbx"
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
        <Link className={classes["header-link"]}>
          <CreditIcon className={`${classes["icon"]} ${classes["credit"]}`} />
        </Link>
        <Link className={classes["header-link"]}>
          <NotifIcon className={`${classes["icon"]} ${classes["notif"]}`} />
        </Link>
        <ProfileSec />
      </div>
    </header>
  );
};

export default MainHeader;
