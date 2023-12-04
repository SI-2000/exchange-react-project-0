import React from "react";

import classes from "./Intro.module.css";
import CustomLink from "../CustomLink";

const Intro = () => {
  return (
    <div className={`${classes["Intro"]} fullscreen`}>
      <div className={`${classes["intro-wrapper"]}`}>
        <h1>ایزی بیت</h1>
        <h3>خرید و فروش سریع، امن و کم هزینه ارز‌های دیجیتال</h3>
        <p>به راحتی به بازار حرفه ای دسترسی داشته باشید</p>
        <CustomLink to="/coins/bitcoin" className="home-page-intro-link">
          به متنوع‌ترین بازار ارز‌های دیجیتال خوش آمده‌اید
        </CustomLink>
      </div>
    </div>
  );
};

export default Intro;
