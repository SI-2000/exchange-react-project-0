import React from "react";
import classes from "./HomePage.module.css";
import Intro from "../component/home-page/Intro";
import FeaturesSlides from "../component/home-page/FeaturesSlides";
import Statistics from "../component/home-page/Statistics";
import HomePageTable from "../component/home-page/HomePageTable";
import { useQuery } from "react-query";
import { getCurrenciesInfo } from "../util/get-currencies";

const HomePage = () => {
  const currenciesQuery = useQuery({
    queryKey: "currencies",
    queryFn: getCurrenciesInfo,
    staleTime: Infinity,
  });

  return (
    <div className={`${classes["HomePage"]}`}>
      <div className={classes["home-page"]}>
        <Intro queryData={currenciesQuery} />
        <HomePageTable queryData={currenciesQuery} />
        <FeaturesSlides />
        <Statistics />
      </div>
    </div>
  );
};

export default HomePage;
