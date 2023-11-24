import React from "react";

import classes from "./PrimaryData.module.css";
import { useDispatch } from "react-redux";
import { searchPairsActions } from "../../store/search-pairs";

const PrimaryData = () => {
  const dispatch = useDispatch();

  return (
    <div className={classes["primary-data"]}>
      <div className={`${classes["col"]} ${classes["name-price"]}`}>
        <div
          onClick={() => {
            dispatch(searchPairsActions.open());
          }}
          className={`${classes["name"]} ${classes["searchOverlay-btn"]}`}
        >
          BTCUSDT
        </div>
        <div
          className={classes["name"]}
        >
          BTC/USDT
        </div>
        <div className={classes["price-change"]}>
          <div className={classes["price"]}>45435</div>
          <div className={`${classes["key-value"]} ${classes["change"]}`}>
            <h5>تغییرات 24 ساعت</h5>
            <div>
              <span className={classes["percentage"]}>456</span>
              <span className={classes["amount"]}>456546</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["col"]}>
        <div className={`${classes["key-value"]} ${classes["high-24h"]}`}>
          <h5>بالاترین</h5>
          <span>4545</span>
        </div>
        <div className={`${classes["key-value"]} ${classes["low-24h"]}`}>
          <h5>پایین ترین</h5>
          <span>4545</span>
        </div>
      </div>
      <div className={classes["col"]}>
        <div className={`${classes["key-value"]} ${classes["volume"]}`}>
          <h5>حجم 24 ساعت</h5>
          <span>546777</span>
        </div>
      </div>
    </div>
  );
};

export default PrimaryData;
