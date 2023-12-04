import React from "react";
import classes from "./HomePage.module.css";
import Intro from "../component/home-page/Intro";
import FeaturesSlides from "../component/home-page/FeaturesSlides";
import Statistics from "../component/home-page/Statistics";
import HomePageTable from "../component/home-page/HomePageTable";

const HomePage = () => {
  return (
    <div className={`${classes["HomePage"]}`}>
      <div className={classes["home-page"]}>
        <Intro />
        <HomePageTable />
        <FeaturesSlides />
        <Statistics />
      </div>
    </div>
  );
};

export default HomePage;
