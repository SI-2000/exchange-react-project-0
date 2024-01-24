import React, { useEffect } from "react";
import classes from "./TradeHistory.module.css";
import DynamicContentWindow from "../DynamicContentWindow ";
import { useReducer_DWindow } from "../../hooks/use-reducer-dwindow";
import OrderHistoryItem from "./OrderHistoryItem";
import SkeletonLoading from "../../ui/SkeletonLoading";
import { useDispatch, useSelector } from "react-redux";
import { tradingActions } from "../../store/trading-data";

const tradeHistoryActions = [
  { ORDER_HISTORY: "تاریخچه سفارش‌ها" },
  { OPEN_ORDERS: "سفارش‌های فعال" },
];

const TradeHistory = ({ isLoading }) => {
  const uid = useSelector((state) => state.auth.uid);
  const [tradeHistoryState, dispatchTradeHistory] =
    useReducer_DWindow(tradeHistoryActions);
  const dispatch = useDispatch();

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
          {historyData.length !== 0 && uid && (
            <div className={`${classes["titles"]}`}>
              <div className={`${classes[""]}`}>جفت ارز</div>
              <div className={`${classes[""]}`}>نوع سفارش</div>
              <div className={`${classes[""]}`}>تراکنش</div>
              <div className={`${classes[""]}`}>مقدار</div>
              <div className={`${classes[""]}`}>قیمت</div>
              <div className={`${classes[""]}`}>ساعت و تاریخ</div>
            </div>
          )}
          {historyData.length !== 0 &&
            uid &&
            historyData.map((item, index) => {
              return <OrderHistoryItem key={index} {...item} />;
            })}
          {historyData.length === 0 && (
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
