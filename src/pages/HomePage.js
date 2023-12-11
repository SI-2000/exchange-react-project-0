import React from "react";
import classes from "./HomePage.module.css";
import Intro from "../component/home-page/Intro";
import FeaturesSlides from "../component/home-page/FeaturesSlides";
import Statistics from "../component/home-page/Statistics";
import HomePageTable from "../component/home-page/HomePageTable";
import { useQuery } from "react-query";
import { getCurrenciesInfo } from "../util/get-currencies";
import RouterLoading from "../ui/RouterLoading";
import { useNavigation } from "react-router-dom";
import ErrorElement from "../component/error-element-comp/ErrorElement";

const HomePage = () => {
  const navigation = useNavigation();
  const currenciesQuery = useQuery({
    queryKey: "currencies",
    queryFn: getCurrenciesInfo,
    staleTime: Infinity,
  });

  if (currenciesQuery.isLoading) return <RouterLoading />;

  if(currenciesQuery.isError) return <ErrorElement />

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
