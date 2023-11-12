import React, { useReducer } from "react";

import classes from "./TradingPage.module.css";
import { useParams } from "react-router-dom";
import PrimaryData from "../component/trading-page-comp/PrimaryData";
import MarketDataSelector from "../component/trading-page-comp/MarketDataSelector";
import OrderBook from "../component/trading-page-comp/OrderBook";
import Trades from "../component/trading-page-comp/Trades";
import Chart from "../component/trading-page-comp/Chart";
import { useReducer_DWindow } from "../hooks/use-reducer-dwindow";
import TradeHistory from "../component/trading-page-comp/TradeHistory";
import TradeSection from "../component/trading-page-comp/TradeSection";
import SelectCurrency from "../component/trading-page-comp/SelectCurrency";
import { useQuery } from "react-query";
import getTradingInfo from "../util/get-trading-info";
import useAssets from "../hooks/use-assets";

const marketDataActions = [
  { CHART: "نمودار" },
  { ORDER_BOOK: "سفارش‌ها" },
  { TRADES: "سفارش‌های اخیر" },
];

const TradingPage = () => {
  const [marketDataDisplayState, dispatchMarketDataDisplay] =
    useReducer_DWindow(marketDataActions);
  const params = useParams();
  const tradingQuery = useQuery({
    queryKey: ["trading-page"],
    queryFn: getTradingInfo,
  });

  const usersData = useAssets()
  return (
    <>
      {tradingQuery.isLoading ? (
        <p>Is loading</p>
      ) : (
        <div className={classes["trading-page"]}>
          <PrimaryData />
          <SelectCurrency />
          <TradeSection />
          <MarketDataSelector
            actions={marketDataActions}
            marketDataDisplayState={marketDataDisplayState}
            onDispatchMDataDisplay={dispatchMarketDataDisplay}
          />
          <Chart className={marketDataDisplayState.componentsClass.CHART} />
          <OrderBook
            data={tradingQuery.data.depth}
            className={marketDataDisplayState.componentsClass.ORDER_BOOK}
          />
          <Trades
            data={tradingQuery.data.trades}
            className={marketDataDisplayState.componentsClass.TRADES}
          />
          <TradeHistory />
        </div>
      )}
    </>
  );
};

export default TradingPage;
