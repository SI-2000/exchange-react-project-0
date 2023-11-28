import React from "react";
import classes from "./TradeHistory.module.css";
import DynamicContentWindow from "../DynamicContentWindow ";
import { useReducer_DWindow } from "../../hooks/use-reducer-dwindow";
import OrderHistoryItem from "./OrderHistoryItem";
import SkeletonLoading from "../../ui/SkeletonLoading";

const tradeHistoryActions = [
  { OPEN_ORDERS: "سفارش‌های فعال" },
  { ORDER_HISTORY: "تاریخچه سفارش‌ها" },
];

const TradeHistory = ({ isLoading }) => {
  const [tradeHistoryState, dispatchTradeHistory] =
    useReducer_DWindow(tradeHistoryActions);

    if (isLoading) {
      return (
        <div className={`${classes["TradeHistory"]}`}>
          <SkeletonLoading />
        </div>
      );
    }

  return (
    <div className={`${classes["TradeHistory"]}`}>
      <div
        className={`${classes["trade-history"]}`}
      >
        <DynamicContentWindow
          actions={tradeHistoryActions}
          onDispatchTabsChanges={dispatchTradeHistory}
          tabsState={tradeHistoryState}
        />
        <div className={classes["open-orders"]}></div>
        {/* <OrderHistoryItem /> */}
      </div>
    </div>
  );
};

export default TradeHistory;
