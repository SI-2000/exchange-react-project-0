import React from "react";
import TradingViewWidget from "react-tradingview-widget";

import classes from "./Chart.module.css";

const Chart = ({ className }) => {
  return (
    <div className={`${classes["chart-container"]} ${classes[className]}`}>
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
  );
};

export default Chart;
