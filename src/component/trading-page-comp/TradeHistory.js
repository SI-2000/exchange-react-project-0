import React from "react";
import classes from "./TradeHistory.module.css";

const tradeHistoryActions=[
  {"OPEN-ORDERS ":"سفارش‌های فعال"},
  {"ORDER_HISTORY":"تاریخچه سفارش‌ها"}
]

const TradeHistory = () => {
  


  return <div className={classes["trade-history"]}>
    <DynamicsCompressorNode 
    />
  </div>;
};

export default TradeHistory;
