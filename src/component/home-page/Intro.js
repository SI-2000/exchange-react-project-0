import React from "react";

import classes from "./Intro.module.css";
import CustomLink from "../CustomLink";
import { roundTo } from "../../util/round-number";

const Intro = ({ queryData }) => {
  if (queryData.isLoading) return <p>loading...</p>;
  if (queryData.isError) return <p>{JSON.stringify(queryData.error)}</p>;

  const currencies = queryData.data.currencies.slice(0, 3);

  return (
    <div className={`${classes["Intro"]} fullscreen`}>
      <div className={`${classes["right-side"]}`}>
        <p className={`${classes["title"]}`}>
          در <span>ایزی‌بیت</span> به حرفه‌ای ترین و در عین حال ساده ترین ابزار
          های معامله در بازار ارز‌های دیجیتال دسترسی خواهید داشت در صرافی امن و
          معتبر ما، شما قادر خواهید بود در کمترین زمان ممکن، به معاملات
          خرید و فروش بیش از ۳۰۰ نوع ارز دیجیتال مختلف بپردازید.
        </p>
        <h3>خرید و فروش سریع، امن و کم هزینه ارز‌های دیجیتال</h3>
        <p className={`${classes["btn-caption"]}`}>
          به راحتی به بازار حرفه ای دسترسی داشته باشید
        </p>
        <CustomLink to="/coins/bitcoin" className="home-page-intro-link">
          به متنوع‌ترین بازار ارز‌های دیجیتال خوش آمده‌اید
        </CustomLink>
      </div>
      <div className={`${classes["left-side"]}`}>
        {currencies.map((currency, index) => {
          const {
            id,
            current_price: price,
            market_cap_change_percentage_24h: change,
          } = currency;
          return (
            <div key={index} className={`fade-in--up`}>
              <div className={`${classes["id"]}`}>{id.toUpperCase()}</div>
              <div
                className={`${classes["change"]} ${
                  change >= 0 ? "positive" : "negative"
                }`}
              >
                {change >= 0 && "+"}
                {roundTo(change, 2)}
              </div>
              <div className={`${classes["price"]}`}>{roundTo(price, 2)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Intro;
