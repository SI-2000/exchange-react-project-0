import React from "react";
import classes from "./MainFooter.module.css";
import { ReactComponent as InstagramIcon } from "../files/icons/instagram.svg";
import { ReactComponent as TwitterIcon } from "../files/icons/twitter.svg";
import { ReactComponent as FacebookIcon } from "../files/icons/facebook.svg";
import { ReactComponent as LinkInIcon } from "../files/icons/linkedin.svg";
import { ReactComponent as CopyRightIcon } from "../files/icons/copyright_FILL0_wght400_GRAD0_opsz48.svg";
import MainFooterLinkBox from "./main-footer/MainFooterLinkBox";

const easybit_links = [
  "درباره ما",
  "قوانین و مقررات",
  "گزارش سال قبل",
  "فرصت های شغلی",
];
const features_links = ["ارز غیرواقعی", "API"];
const guide_links = ["سوالات متداول", "امنیت حساب", "آموزش ترید", "احراز هویت"];
const contact_links = ["ارتباط با ما", "انتقادات و پیشنهادات"];

const MainFooter = () => {
  return (
    <div className={classes["main-footer"]}>
      <div className={classes["links-sec"]}>
        <MainFooterLinkBox title="ایزی بیت" links={easybit_links} />
        <MainFooterLinkBox title="امکانات" links={features_links} />
        <MainFooterLinkBox title="راهنما" links={guide_links} />
        <MainFooterLinkBox title="ارتباط با ما" links={contact_links} />
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
