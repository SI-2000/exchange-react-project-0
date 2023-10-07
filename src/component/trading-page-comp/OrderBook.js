import React from "react";

import classes from "./OrderBook.module.css";

const OrderBook = ({ className }) => {
  return (
    <div className={`${classes["order-book"]} ${classes[className]}`}></div>
  );
};

export default OrderBook;
