import React from "react";

import classes from "./Intro.module.css";
import CustomLink from "../CustomLink";

const Intro = () => {
  return (
    <div className={`${classes["Intro"]}`}>
      <div className={classes["intro-wrapper"]}>
        <h1>ایزی بیت</h1>
        <h3>خرید و فروش سریع، امن و کم هزینه ارز‌های دیجیتال</h3>
        <p>به متنوع‌ترین بازار ارز‌های دیجیتال خوش آمده‌اید</p>
        <CustomLink to="/coins/bitcoin" className="home-page-intro-link">
          همین الان خرید کنید
        </CustomLink>
      </div>
    </div>
  );
};

export default Intro;
