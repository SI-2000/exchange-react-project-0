import React from "react";

import classes from "./OrderHistoryItem.module.css";

const OrderHistoryItem = (props) => {
  return (
    <div className={classes["order-item"]}>
      <div className={`${classes["header"]}`}>
        <div className={classes["currency-pair"]}>{props.pairs}</div>
        <div
          className={`${classes["transaction-type"]} ${
            props.formType === "buy" ? "positive" : "negative"
          }`}
        >
          {props.formType === "buy" ? "خرید" : "فروش"}
        </div>
        <div
          className={`${classes["order-type"]} ${
            props.formType === "buy" ? "positive" : "negative"
          }`}
        >
          {props.orderType}
        </div>
      </div>
      <dl>
        <dt className={classes["currency-pair"]}>جفت ارز</dt>
        <dd className={classes["currency-pair"]}>{props.pairs}</dd>

        <dt className={classes["order-type"]}>نوع سفارش</dt>
        <dd className={classes["order-type"]}>{props.orderType}</dd>

        <dt className={classes["transaction-type"]}>تراکنش</dt>
        <dd
          className={`${classes["transaction-type"]} ${
            !true ? "positive" : "negative"
          }`}
        >
          {props.formType === "buy" ? "خرید" : "فروش"}
        </dd>

        <dt className={classes["amount"]}>مقدار</dt>
        <dd className={classes["amount"]}>{props.amount}</dd>

        <dt className={classes["price"]}>قیمت</dt>
        <dd className={classes["price"]}>{props.price}$</dd>

        <dt className={classes["time"]}>زمان</dt>
        <dd className={classes["time"]}>
          <span>{props.time}</span> <span>{props.date}</span>
        </dd>
      </dl>
    </div>
  );
};

export default OrderHistoryItem;
