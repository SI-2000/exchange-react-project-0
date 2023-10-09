import React from "react";
import ReactDOM from "react-dom";
import Overlay from "../../ui/Overlay";

import classes from "./TradeSection.module.css";
import TradeForm from "./TradeForm";

const TradeSection = () => {
  return (
    <div className={classes["trade-sec"]}>
      <div className={classes["show-form-btns"]}>
        <button className={classes["sell"]}>فروش</button>
        <button className={classes["buy"]}>خرید</button>
      </div>
      {ReactDOM.createPortal(
        <Overlay>
          <TradeForm />
        </Overlay>,
        document.getElementById("overlay")
      )}
    </div>
  );
};

export default TradeSection;
