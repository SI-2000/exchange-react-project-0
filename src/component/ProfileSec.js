import React from "react";

import { useUsername } from "../hooks/use-username";
import { Link, useLocation } from "react-router-dom";

import classes from "./ProfileSec.module.css";
import avatarImg from "../files/images/avatar.png";
import { ReactComponent as CreditIcon } from "../files/icons/credit_card_FILL0_wght400_GRAD0_opsz48.svg";
import { ReactComponent as NotifIcon } from "../files/icons/notifications_FILL0_wght400_GRAD0_opsz48.svg";

const ProfileSec = () => {

  const userName = useUsername();

  return (
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
  );
};

export default ProfileSec;
