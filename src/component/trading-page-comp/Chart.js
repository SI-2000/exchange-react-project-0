import React from "react";
import TradingViewWidget from "react-tradingview-widget";

import classes from "./Chart.module.css";
import SkeletonLoading from "../../ui/SkeletonLoading";

const Chart = ({ className, isLoading }) => {
  return (
    <div className={`${classes["Chart"]}`}>
      <SkeletonLoading isVisible={isLoading} />
      <div
        className={`${classes["chart-container"]} ${classes[className]} ${
          isLoading && "invisible"
        }`}
      >
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
