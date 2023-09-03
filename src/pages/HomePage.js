import React from "react";

import classes from "./HomePage.module.css";
import { Link } from "react-router-dom";
import CurrenciesTable from "../component/CurrenciesTable";



const HomePage = () => {
  return (
    <div className={classes["home-page"]}>
      <div className={classes["intro"]}>
        <h1>ایزی بیت</h1>
        <p>خرید و فروش سریع،امن و کم هزینه ارز های دیجیتال</p>
      </div>
      <div className={classes["currencies-list"]}>
        <CurrenciesTable />
      </div>
    </div>
  );
};

export default HomePage;
