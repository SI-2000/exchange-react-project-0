import React from "react";

import classes from "./MainFooter.module.css";

import { ReactComponent as InstagramIcon } from "../files/icons/instagram.svg";
import { ReactComponent as TwitterIcon } from "../files/icons/twitter.svg";
import { ReactComponent as FacebookIcon } from "../files/icons/facebook.svg";
import { ReactComponent as LinkInIcon } from "../files/icons/linkedin.svg";
import { ReactComponent as CopyRightIcon } from "../files/icons/copyright_FILL0_wght400_GRAD0_opsz48.svg";


const MainFooter = () => {
  return (
    <div className={classes["main-footer"]}>
      <div className={classes["links-sec"]}>
        <div className={classes["easybit"]}>
          ایزی بیت
          {/* <h1>ایزی بیت</h1>
        <div className={classes["links"]}>
          <a href="#">درباره ما</a>
          <a href="#">قوانین و مقررات</a>
          <a href="#">گزارش سال قبل</a>
          <a href="#">فرصت های شغلی</a>
        </div> */}
        </div>
        <div className={classes["facility"]}>امکانات</div>
        <div className={classes["guide"]}>راهنما</div>
        <div className={classes["contact"]}>ارتباط با ما</div>
      </div>
      <div className={classes["social-media"]}>
        <h3>در شبکه های اجتماعی ما را دنبال کنید</h3>
        <div className={classes["icons"]}>
          <div className={classes["icon-container"]}>
            <InstagramIcon
              className={`${classes["icon"]} ${classes["instagram"]}`}
            />
          </div>
          <div className={classes["icon-container"]}>
            <TwitterIcon
              className={`${classes["icon"]} ${classes["twitter"]}`}
            />
          </div>
          <div className={classes["icon-container"]}>
            <FacebookIcon
              className={`${classes["icon"]} ${classes["facebook"]}`}
            />
          </div>
          <div className={classes["icon-container"]}>
            <LinkInIcon
              className={`${classes["icon"]} ${classes["linkedin"]}`}
            />
          </div>
        </div>
      </div>
      <div className={classes["copy-right"]}>
        <CopyRightIcon />
        <p>تمام حقوق مادی و معنوی این سایت متعلق به ایزی بیت است. </p>
      </div>
    </div>
  );
};

export default MainFooter;