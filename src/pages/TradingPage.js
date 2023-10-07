import React, { useReducer } from "react";

import classes from "./TradingPage.module.css";
import { useParams } from "react-router-dom";
import PrimaryData from "../component/trading-page-comp/PrimaryData";
import SmartPhonDataSelector from "../component/trading-page-comp/SmartPhonDataSelector";
import OrderBook from "../component/trading-page-comp/OrderBook";
import Trades from "../component/trading-page-comp/Trades";
import Chart from "../component/trading-page-comp/Chart";

function dataDisplayReducer(state, action) {
  switch (action.type) {
    case "CHART":
      return {
        componentsClass: {
          chart: undefined,
          order_book: "hidden",
          trades: "hidden",
        },
        buttonsClass: {
          chart: "active",
          order_book: undefined,
          trades: undefined,
        },
      };
    case "ORDER_BOOK":
      return {
        componentsClass: {
          chart: "hidden",
          order_book: undefined,
          trades: "hidden",
        },
        buttonsClass: {
          chart: undefined,
          order_book: "active",
          trades: undefined,
        },
      };
    case "TRADES":
      return {
        componentsClass: {
          chart: "hidden",
          order_book: "hidden",
          trades: undefined,
        },
        buttonsClass: {
          chart: undefined,
          order_book: undefined,
          trades: "active",
        },
      };
  }
}

const TradingPage = () => {
  const [dataDisplayState, dispatchDataDisplay] = useReducer(
    dataDisplayReducer,
    {
      componentsClass: {
        chart: undefined,
        order_book: "hidden",
        trades: "hidden",
      },
      buttonsClass: {
        chart: "active",
        order_book: undefined,
        trades: undefined,
      },
    }
  );
  const params = useParams();
  console.log(params.coinId);

  return (
    <div className={classes["trading-page"]}>
      <PrimaryData />
      <SmartPhonDataSelector
        activeWindowState={dataDisplayState}
        onChangeActiveState={dispatchDataDisplay}
      />
      <Chart className={dataDisplayState.componentsClass.chart} />
      <OrderBook className={dataDisplayState.componentsClass.order_book} />
      <Trades className={dataDisplayState.componentsClass.trades} />
    </div>
  );
};

export default TradingPage;
