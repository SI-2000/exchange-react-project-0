import React from "react";

import classes from "./MarketPriceOB.module.css";
import { ReactComponent as ArrowUp } from "../../files/icons/arrow_upward_alt_FILL0_wght400_GRAD0_opsz24.svg";
import { ReactComponent as ArrowDown } from "../../files/icons/arrow_downward_alt_FILL0_wght400_GRAD0_opsz24.svg";

const MarketPriceOB = () => {
  return (
    <div className={classes["market-price"]}>
      <div className={classes["price"]}>56dfsgedrtgdfsgdsf656</div>
      <ArrowUp className={classes["arrow-up"]} />
      <ArrowDown className={classes["arrow-down"]}  />
    </div>
  );
};

export default MarketPriceOB;
