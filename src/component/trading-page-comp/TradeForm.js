import React from "react";

import classes from "./TradeForm.module.css";

const TradeForm = () => {
  return (
    <div className={classes["trade-form"]}>
      <div className={classes["show-form-btns"]}>
        <button className={classes["sell"]}>فروش</button>
        <button className={classes["buy"]}>خرید</button>
      </div>
    </div>
  );
};

export default TradeForm;
