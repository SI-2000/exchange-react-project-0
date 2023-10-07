import React from "react";

import classes from "./SmartPhonDataSelector.module.css";

const SmartPhonDataSelector = (props) => {
  const activeStateClasses = {
    chart: props.activeWindowState.buttonsClass.chart,
    order_book: props.activeWindowState.buttonsClass.order_book,
    trades: props.activeWindowState.buttonsClass.trades,
  };

  return (
    <div className={classes["selectors"]}>
      <button
        onClick={() => props.onChangeActiveState({ type: "CHART" })}
        className={`${classes["chart"]} ${classes[activeStateClasses.chart]}`}
      >
        نمودار
      </button>
      <button
        onClick={() => props.onChangeActiveState({ type: "ORDER_BOOK" })}
        className={`${classes["order-book"]} ${
          classes[activeStateClasses.order_book]
        }`}
      >
        سفارش‌ها
      </button>
      <button
        onClick={() => props.onChangeActiveState({ type: "TRADES" })}
        className={`${classes["trades"]} ${classes[activeStateClasses.trades]}`}
      >
        سفارش‌های اخیر
      </button>
    </div>
  );
};

export default SmartPhonDataSelector;
