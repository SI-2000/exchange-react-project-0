import React from "react";
import { Link } from "react-router-dom";

import classes from "./BuySellBtn.module.css";
import { useSelector } from "react-redux";

const BuySellBtn = ({ formType }) => {
  const uid = useSelector((state) => state.auth.uid);

  const class_name = !uid
    ? "signed-out-trade-btn"
    : formType === "buy"
    ? "buy"
    : "sell";

  const comp_inner = !uid ? (
    <span>
      <Link>وارد شوید</Link> یا <Link>حالا ثبت نام کنید</Link>
    </span>
  ) : formType === "buy" ? (
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
