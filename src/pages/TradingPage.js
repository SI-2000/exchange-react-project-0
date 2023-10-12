import React, { useReducer } from "react";

import classes from "./TradingPage.module.css";
import { useParams } from "react-router-dom";
import PrimaryData from "../component/trading-page-comp/PrimaryData";
import MarketDataSelector from "../component/trading-page-comp/MarketDataSelector";
import OrderBook from "../component/trading-page-comp/OrderBook";
import Trades from "../component/trading-page-comp/Trades";
import Chart from "../component/trading-page-comp/Chart";
import { useReducer_DWindow } from "../hook/use-reducer-dwindow";
import TradeHistory from "../component/trading-page-comp/TradeHistory";
import TradeSection from "../component/trading-page-comp/TradeSection";

const marketDataActions = [
  { CHART: "نمودار" },
  { ORDER_BOOK: "سفارش‌ها" },
  { TRADES: "سفارش‌های اخیر" },
];


const TradingPage = () => {
  const [marketDataDisplayState, dispatchMarketDataDisplay] =
    useReducer_DWindow(marketDataActions);
  const params = useParams();

  return (
    <div className={classes["trading-page"]}>
      <PrimaryData />
      <MarketDataSelector
        actions={marketDataActions}
        marketDataDisplayState={marketDataDisplayState}
        onDispatchMDataDisplay={dispatchMarketDataDisplay}
      />
      <Chart className={marketDataDisplayState.componentsClass.CHART} />
      <OrderBook
        className={marketDataDisplayState.componentsClass.ORDER_BOOK}
      />
      <Trades className={marketDataDisplayState.componentsClass.TRADES} />

      <TradeHistory />
      <TradeSection />
    </div>
  );
};

export default TradingPage;
