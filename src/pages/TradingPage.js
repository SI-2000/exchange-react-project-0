import React, { useReducer } from "react";

import classes from "./TradingPage.module.css";
import { useParams } from "react-router-dom";
import PrimaryData from "../component/trading-page-comp/PrimaryData";
import SmartPhonDataSelector from "../component/trading-page-comp/SmartPhonDataSelector";
import OrderBook from "../component/trading-page-comp/OrderBook";
import Trades from "../component/trading-page-comp/Trades";
import Chart from "../component/trading-page-comp/Chart";
import { useReducer_DWindow } from "../hook/use-reducer-dwindow";

const actions = [
  { CHART: "نمودار" },
  { ORDER_BOOK: "سفارش‌ها" },
  { TRADES: "سفارش‌های اخیر" },
];

const TradingPage = () => {
  const [dataDisplayState, dispatchDataDisplay] = useReducer_DWindow(actions);
  const params = useParams();

  return (
    <div className={classes["trading-page"]}>
      <PrimaryData />
      <SmartPhonDataSelector
        actions={actions}
        activeWindowState={dataDisplayState}
        onChangeActiveState={dispatchDataDisplay}
      />
      <Chart className={dataDisplayState.componentsClass.CHART} />
      <OrderBook className={dataDisplayState.componentsClass.ORDER_BOOK} />
      <Trades className={dataDisplayState.componentsClass.TRADES} />
    </div>
  );
};

export default TradingPage;
