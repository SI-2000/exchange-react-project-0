import React from "react";
import TradingViewWidget from "react-tradingview-widget";

import classes from "./Chart.module.css";
import SkeletonLoading from "../../ui/SkeletonLoading";
import { useParams } from "react-router-dom";

const Chart = ({ className, isLoading }) => {
  const params = useParams();

  if (isLoading) {
    return (
      <div className={`${classes["Chart"]} ${classes[className]}`}>
        <SkeletonLoading />
      </div>
    );
  }
  return (
    <div className={`${classes["Chart"]} ${classes[className]}`}>
      <div className={`${classes["chart-container"]}`}>
        {
          <TradingViewWidget
            symbol={params.coinId}
            theme="dark"
            locale="fa"
            width="100%"
            height="20rem"
          />
        }
      </div>
    </div>
  );
};

export default Chart;
