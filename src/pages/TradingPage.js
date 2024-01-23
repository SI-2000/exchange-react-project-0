import React, { useEffect, useReducer, useState } from "react";

import classes from "./TradingPage.module.css";
import { json, useParams } from "react-router-dom";
import PrimaryData from "../component/trading-page-comp/PrimaryData";
import MarketDataSelector from "../component/trading-page-comp/MarketDataSelector";
import OrderBook from "../component/trading-page-comp/OrderBook";
import Trades from "../component/trading-page-comp/Trades";
import Chart from "../component/trading-page-comp/Chart";
import { useReducer_DWindow } from "../hooks/use-reducer-dwindow";
import TradeHistory from "../component/trading-page-comp/TradeHistory";
import TradeSection from "../component/trading-page-comp/TradeSection";
import SelectCurrency from "../component/trading-page-comp/SelectCurrency";
import { useQuery } from "@tanstack/react-query";
import getTradingInfo from "../util/get-trading-info";
import useGetAssets from "../hooks/use-get-assets";
import { useDispatch, useSelector } from "react-redux";
import ErrorElement from "../component/error-element-comp/ErrorElement";
import { tradingActions } from "../store/trading-data";

const marketDataActions = [
  { CHART: "نمودار" },
  { ORDER_BOOK: "سفارش‌ها" },
  { TRADES: "سفارش‌های اخیر" },
];

const TradingPage = () => {
  const uid = useSelector((state) => state.auth.uid);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tradingActions.setPairs(params.coinId));
  }, [params.coinId]);

  const tradingQuery = useQuery({
    queryKey: ["trading-page"],
    queryFn: async () => {
      return await getTradingInfo(params.coinId);
    },
    // staleTime: 1000,
    refetchInterval: 1000,
    retry: 0,
  });

  const data = tradingQuery.data;

  const assetsQuery = useGetAssets();

  const [marketDataDisplayState, dispatchMarketDataDisplay] =
    useReducer_DWindow(marketDataActions);

  const isLoading = tradingQuery.isLoading || assetsQuery.isLoading;

  if (tradingQuery.isError || assetsQuery.isError) {
    return <ErrorElement err={tradingQuery.error} />;
  }

  return (
    <div className={classes["trading-page"]}>
      <PrimaryData data={data} isLoading={isLoading} coinId={params.coinId} />
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
