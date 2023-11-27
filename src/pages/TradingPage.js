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

  const assetsQuery = useGetAssets();

  const [marketDataDisplayState, dispatchMarketDataDisplay] =
    useReducer_DWindow(marketDataActions);

  // if (tradingQuery.isLoading || assetsQuery.isLoading)
  //   return <p>Is loading...</p>;

  // const isLoading = tradingQuery.isLoading || assetsQuery.isLoading;
  const isLoading = false


  if (tradingQuery.isError || assetsQuery.isError) return <p>Error</p>;
  if (!tradingQuery.data) return <p>There is no data.</p>;

  return (
    <div className={classes["trading-page"]}>
      <PrimaryData isLoading={isLoading} />
      <SelectCurrency
        currencies={tradingQuery.data.currencies}
        isLoading={isLoading}
      />
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
        data={tradingQuery.data.depth}
        className={marketDataDisplayState.componentsClass.ORDER_BOOK}
        isLoading={isLoading}
      />
      <Trades
        data={tradingQuery.data.trades}
        className={marketDataDisplayState.componentsClass.TRADES}
        isLoading={isLoading}
      />
      <TradeHistory isLoading={isLoading} />
    </div>
  );
};

export default TradingPage;
