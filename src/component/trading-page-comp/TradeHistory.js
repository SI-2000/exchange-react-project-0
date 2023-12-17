import React from "react";
import classes from "./TradeHistory.module.css";
import DynamicContentWindow from "../DynamicContentWindow ";
import { useReducer_DWindow } from "../../hooks/use-reducer-dwindow";
import OrderHistoryItem from "./OrderHistoryItem";
import SkeletonLoading from "../../ui/SkeletonLoading";
import { useSelector } from "react-redux";

const tradeHistoryActions = [
  { ORDER_HISTORY: "تاریخچه سفارش‌ها" },
  { OPEN_ORDERS: "سفارش‌های فعال" },
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

  console.log(historyData);

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
          {historyData.length !== 0 && (
            <div className={`${classes["titles"]}`}>
              <div className={`${classes[""]}`}>جفت ارز</div>
              <div className={`${classes[""]}`}>نوع سفارش</div>
              <div className={`${classes[""]}`}>تراکنش</div>
              <div className={`${classes[""]}`}>مقدار</div>
              <div className={`${classes[""]}`}>قیمت</div>
              <div className={`${classes[""]}`}>ساعت و تاریخ</div>
            </div>
          )}
          {historyData.length !== 0 ? (
            historyData.map((item, index) => {
              return <OrderHistoryItem key={index} {...item} />;
            })
          ) : (
            <p className={`${classes["open-orders-msg"]}`}>
              تاریخچه معاملات خالی است
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TradeHistory;
