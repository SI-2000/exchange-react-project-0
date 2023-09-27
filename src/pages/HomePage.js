import React from "react";

import classes from "./HomePage.module.css";
import { Link } from "react-router-dom";
import CurrenciesTable from "../component/CurrenciesTable";
import WhiteFrame from "../ui/WhiteFrame";

const HomePage = () => {
  return (
    <div className={classes["home-page"]}>
      <div className={classes["intro"]}>
        <h1>ایزی بیت</h1>
        <p>خرید و فروش سریع،امن و کم هزینه ارز های دیجیتال</p>
      </div>
      <WhiteFrame className="margin-top">
        <CurrenciesTable />
      </WhiteFrame>
    </div>
  );
};

export default HomePage;
