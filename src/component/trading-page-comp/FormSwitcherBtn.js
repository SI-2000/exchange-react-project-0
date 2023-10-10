import React from "react";

import classes from "./FormSwitcherBtn.module.css";
import BuySellTriangle from "../../ui/custom-svg-components/BuySellTriangle";

const FormSwitcherBtn = ({ transaction, onClick, visiableFormState }) => {
  return (
    <div className={classes["form-switcher"]}>
      <button
        onClick={onClick}
        className={`${classes["form-switcher-btn"]} ${
          visiableFormState === transaction
            ? classes[transaction + "-selected"]
            : undefined
        }`}
      >
        {transaction === "buy" ? "خرید" : "فروش"}
      </button>
      <BuySellTriangle
        className={
          visiableFormState === transaction
            ? transaction + "-triangle"
            : undefined
        }
      />
    </div>
  );
};

export default FormSwitcherBtn;
