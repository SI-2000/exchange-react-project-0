import React from "react";

import classes from "./AVBLPercentage.module.css";

const AVBLPercentage = () => {
  return (
    <div className={classes["percentage"]}>
      <button className={classes["p25"]}>25%</button>
      <button className={classes["p50"]}>50%</button>
      <button className={classes["p75"]}>75%</button>
      <button className={classes["p100"]}>100%</button>
    </div>
  );
};

export default AVBLPercentage;
