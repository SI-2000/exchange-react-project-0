import React from "react";
import { Link } from "react-router-dom";

import classes from "./BuySellBtn.module.css";

// Temp variable
const isLogedIn = true;

const BuySellBtn = ({ activeForm }) => {
  const class_name = isLogedIn
    ? "signed-out-trade-btn"
    : activeForm === "buy"
    ? "buy"
    : "sell";

  const comp_inner = isLogedIn ? (
    <span>
      <Link>وارد شوید</Link> یا <Link>حالا ثبت نام کنید</Link>
    </span>
  ) : activeForm === "buy" ? (
    "خرید"
  ) : (
    "فروش"
  );

  return (
    <button className={`${classes["buy-sell-btn"]} ${classes[class_name]}`}>
      {comp_inner}
    </button>
  );
};

export default BuySellBtn;
