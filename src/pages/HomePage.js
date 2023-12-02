import React from "react";

import classes from "./HomePage.module.css";
import CurrenciesTable from "../component/CurrenciesTable";
import WhiteFrame from "../ui/WhiteFrame";
import Intro from "../component/home-page/Intro";
import FeaturesSlides from "../component/home-page/FeaturesSlides";
import Statistics from "../component/home-page/Statistics";

const HomePage = () => {
  const currencies = [
    { coinId: "bitcoin", fname: "بیت کوین" },
    { coinId: "ethereum", fname: "اتریوم" },
    { coinId: "cardano", fname: "کاردانو" },
    { coinId: "binancecoin", fname: "بایننس کوین" },
  ];

  return (
    <div className={classes["home-page"]}>
      <Intro />
      <FeaturesSlides />
      <Statistics />
      <WhiteFrame className="home-page-table">
        <CurrenciesTable currencies={currencies} />
      </WhiteFrame>
    </div>
  );
};

export default HomePage;
