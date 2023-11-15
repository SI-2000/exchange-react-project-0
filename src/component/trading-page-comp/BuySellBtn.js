import React from "react";
import { Link } from "react-router-dom";

import classes from "./BuySellBtn.module.css";
import { useSelector } from "react-redux";

const BuySellBtn = ({ formType }) => {
  const uid = useSelector((state) => state.auth.uid);

  if (!uid) {
    return (
      <div
        className={`${classes["buy-sell-btn"]} ${classes["auth-links-container"]}`}
      >
        <span>
          <Link to="/auth/?mode=login">وارد شوید</Link> یا{" "}
          <Link to="/auth/?mode=signup">حالا ثبت نام کنید</Link>
        </span>
      </div>
    );
  }

  return (
    <button className={`${classes["buy-sell-btn"]} ${classes[formType]}`}>
      {formType === "خرید" ? "خرید" : "فروش"}
    </button>
  );
};

export default BuySellBtn;
