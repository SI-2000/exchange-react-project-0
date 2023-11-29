import React from "react";
import { useUsername } from "../hooks/use-username";
import { Link, useLocation } from "react-router-dom";
import classes from "./ProfileSec.module.css";
import avatarImg from "../files/images/avatar.png";
import { ReactComponent as CreditIcon } from "../files/icons/credit_card_FILL0_wght400_GRAD0_opsz48.svg";
import { ReactComponent as NotifIcon } from "../files/icons/notifications_FILL0_wght400_GRAD0_opsz48.svg";
import { useLogout } from "../hooks/use-logout";

const ProfileSec = () => {
  const userName = useUsername();
  const location = useLocation();

  let userIsInAssetsPath = false;
  if (location.pathname === "/assets") userIsInAssetsPath = true;

  const logoutHandler = useLogout();

  return (
    <div className={`${classes["ProfileSec"]}`}>
      <div className={classes["profile-sec"]}>
        <Link className={classes["header-link"]}>
          <CreditIcon className={`${classes["icon"]} ${classes["credit"]}`} />
        </Link>
        <Link className={classes["header-link"]}>
          <NotifIcon className={`${classes["icon"]} ${classes["notif"]}`} />
        </Link>
        <div className={classes["specification"]}>
          <div className={classes["name"]}>{userName}</div>
        </div>
        <div className={classes["image"]}>
          <img src={avatarImg}></img>
        </div>
      </div>
      <div className={`${classes["profile-overlay"]}`}>
        <div className={`${classes["actions-wrapper"]}`}>
          <h1 className={`${classes[""]}`}>
            {userName}
          </h1>
          {!userIsInAssetsPath && (
            <Link className={`${classes["overlay-actions"]}`} to="assets">
              دارایی ها
            </Link>
          )}
          <button
            className={`${classes["overlay-actions"]}`}
            onClick={logoutHandler}
          >
            خروج
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSec;
