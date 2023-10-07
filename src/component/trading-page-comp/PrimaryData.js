import React from 'react'

import classes from "./PrimaryData.module.css"

const PrimaryData = () => {
  return (
    <div className={classes["primary-data"]}>
    <div className={classes["col"]}>
      <div className={classes["name"]}>BTC/USDT</div>
      <div className={classes["price-change"]}>
        <div className={classes["price"]}>45435</div>
        <div className={classes["change"]}>
          <h5>تغییرات 24 ساعت</h5>
          <span className={classes["percentage"]}>456</span>
          <span className={classes["amount"]}>456546</span>{" "}
        </div>
      </div>
    </div>
    <div className={classes["col"]}>
      <div className={classes["high-24h"]}>
        <h5>بالاترین</h5>
        <p>4545</p>
      </div>
      <div className={classes["low-24h"]}>
        <h5>پایین ترین</h5>
        <p>4545</p>
      </div>
    </div>
    <div className={classes["col"]}>
      <div className={classes["volume"]}>
        <h5>حجم 24 ساعت</h5>
        <p>546777</p>
      </div>
    </div>
  </div>  )
}

export default PrimaryData