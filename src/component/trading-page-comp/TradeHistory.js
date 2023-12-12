import React from "react";
import classes from "./TradeHistory.module.css";
import DynamicContentWindow from "../DynamicContentWindow ";
import { useReducer_DWindow } from "../../hooks/use-reducer-dwindow";
import OrderHistoryItem from "./OrderHistoryItem";
import SkeletonLoading from "../../ui/SkeletonLoading";
import { useSelector } from "react-redux";

const tradeHistoryActions = [
  { OPEN_ORDERS: "سفارش‌های فعال" },
  { ORDER_HISTORY: "تاریخچه سفارش‌ها" },
];

const TradeHistory = ({ isLoading }) => {
  const [tradeHistoryState, dispatchTradeHistory] =
    useReducer_DWindow(tradeHistoryActions);

  const historyData = useSelector((state) => state.tradingData.trade_history);

  if (isLoading) {
    return (
      <div className={`${classes["TradeHistory"]}`}>
        <SkeletonLoading />
      </div>
    );
  }

  return (
    <div className={`${classes["TradeHistory"]}`}>
      <div className={`${classes["trade-history"]}`}>
        <div className={`${classes["btns-wrapper"]}`}>
          
        <DynamicContentWindow
          actions={tradeHistoryActions}
          onDispatchTabsChanges={dispatchTradeHistory}
          tabsState={tradeHistoryState}
        />
        </div>
        <div className={classes["open-orders"]}>
          {historyData.map((item, index) => {
            return <OrderHistoryItem key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TradeHistory;
