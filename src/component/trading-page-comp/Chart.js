import React from "react";
import TradingViewWidget from "react-tradingview-widget";

import classes from "./Chart.module.css";
import SkeletonLoading from "../../ui/SkeletonLoading";

const Chart = ({ className, isLoading }) => {
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
        {/* {
        <TradingViewWidget
          symbol="BTCUSDT"
          theme="dark"
          locale="fa"
          width="100%"
          height="20rem"
        />
      } */}
      </div>
    </div>
  );
};

export default Chart;
