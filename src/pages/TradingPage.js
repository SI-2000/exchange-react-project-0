import React, { useReducer, useState } from "react";

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
import useGetAssets from "../hooks/use-get-assets";
import { useSelector } from "react-redux";

const marketDataActions = [
  { CHART: "نمودار" },
  { ORDER_BOOK: "سفارش‌ها" },
  { TRADES: "سفارش‌های اخیر" },
];

const TradingPage = () => {
  const uid = useSelector((state) => state.auth.uid);

  const tradingQuery = useQuery({
    queryKey: ["trading-page"],
    queryFn: async () => {
      return await getTradingInfo(uid);
    },
  });

  const data = tradingQuery.data;

  const assetsQuery = useGetAssets();

  const [marketDataDisplayState, dispatchMarketDataDisplay] =
    useReducer_DWindow(marketDataActions);

  const isLoading = tradingQuery.isLoading || assetsQuery.isLoading;

  if (tradingQuery.isError || assetsQuery.isError) return <p>Error</p>;

  return (
    <div className={classes["trading-page"]}>
      <PrimaryData data={data} isLoading={isLoading} />
      <SelectCurrency data={data} isLoading={isLoading} />
      <TradeSection isLoading={isLoading} />
      <MarketDataSelector
        actions={marketDataActions}
        marketDataDisplayState={marketDataDisplayState}
        onDispatchMDataDisplay={dispatchMarketDataDisplay}
        isLoading={isLoading}
      />
      <Chart
        className={marketDataDisplayState.componentsClass.CHART}
        isLoading={isLoading}
      />
      <OrderBook
        data={data}
        className={marketDataDisplayState.componentsClass.ORDER_BOOK}
        isLoading={isLoading}
      />
      <Trades
        data={data}
        className={marketDataDisplayState.componentsClass.TRADES}
        isLoading={isLoading}
      />
      <TradeHistory isLoading={isLoading} />
      <div className={`${classes["background"]}`}></div>
    </div>
  );
};

export default TradingPage;
