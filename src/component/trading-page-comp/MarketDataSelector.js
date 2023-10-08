import React from "react";
import DynamicContentWindow from "../DynamicContentWindow ";

import classes from "./MarketDataSelector.module.css";

const MarketDataSelector = (props) => {
  return (
    <div className={classes["selectors"]}>
      <DynamicContentWindow
        actions={props.actions}
        onDispatchTabsChanges={props.onDispatchMDataDisplay}
        marketDataDisplayState={props.marketDataDisplayState}
      />
    </div>
  );
};

export default MarketDataSelector;
