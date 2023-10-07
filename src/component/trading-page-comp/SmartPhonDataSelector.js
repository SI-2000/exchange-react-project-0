import React from "react";
import DynamicContentWindow from "../DynamicContentWindow ";

import classes from "./SmartPhonDataSelector.module.css";

const SmartPhonDataSelector = (props) => {
  const activeStateClasses = {
    CHART: props.activeWindowState.buttonsClass.CHART,
    ORDER_BOOK: props.activeWindowState.buttonsClass.ORDER_BOOK,
    TRADES: props.activeWindowState.buttonsClass.TRADES,
  };

  return (
    <div className={classes["selectors"]}>
      <DynamicContentWindow
        actions={props.actions}
        onChangeActiveState={props.onChangeActiveState}
        displayClasses={activeStateClasses}
      />
    </div>
  );
};

export default SmartPhonDataSelector;
