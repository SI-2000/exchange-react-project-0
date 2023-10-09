import React from "react";

import classes from "./OrderHistoryItem.module.css";

const OrderHistoryItem = () => {
  return (
    <div className={classes["order-item"]}>
      <div className={classes["header"]}>
        <div className={classes["currency-pair"]}>BTCUSDT</div>
        <div className={classes["transaction-type"]}>فروش</div>
        <div className={classes["order-type"]}>Limit</div>

      </div>
      <dl>
        <dt className={classes["currency-pair"]}>جفت ارز</dt>
        <dd className={classes["currency-pair"]}>BTCUSDT</dd>

        <dt className={classes["order-type"]}>نوع سفارش</dt>
        <dd className={classes["order-type"]}>Limit</dd>

        <dt className={classes["transaction-type"]}>تراکنش</dt>
        <dd className={classes["transaction-type"]}>فروش</dd>

        <dt className={classes["amount"]}>مقدار</dt>
        <dd className={classes["amount"]}>6576</dd>

        <dt className={classes["price"]}>قیمت</dt>
        <dd className={classes["price"]}>56765</dd>

        <dt className={classes["time"]}>زمان</dt>
        <dd className={classes["time"]}>
          <span>23:34</span> <span>34/34/34</span>
        </dd>
      </dl>
    </div>
  );
};

export default OrderHistoryItem;
