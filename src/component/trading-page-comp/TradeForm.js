import React, { useState } from "react";

import classes from "./TradeForm.module.css";
import { Link } from "react-router-dom";
import SelectBtn from "../SelectBtn";
import BuySellTriangle from "../../ui/custom-svg-components/BuySellTriangle";
import FormSwitcherBtn from "./FormSwitcherBtn";
import DynamicContentWindow from "../DynamicContentWindow ";
import { useReducer_DWindow } from "../../hook/use-reducer-dwindow";
import TradeInputs from "./TradeInputs";

const TradeForm = ({ className, activeForm, setActiveForm }) => {
  const tradeTypes = ["spot", "cross", "isolated"];

  const [tradeType, setTradeType] = useState("spot");

  const orderTypes = [
    { LIMIT: "Limit" },
    { MARKET: "Market" },
    { STOP_LIMIT: "Stop-limit" },
  ];
  const [selectedOrderType, dispatchSelectedOrderType] =
    useReducer_DWindow(orderTypes);

  function showBuyFormHandler() {
    setActiveForm("buy");
  }
  function showSellFormHandler() {
    setActiveForm("sell");
  }

  return (
    <div className={`${classes["trade-form"]} ${classes[className]}`}>
      <div className={classes["trade-type-selector"]}>
        {tradeTypes.map((type) => {
          return (
            <SelectBtn
              className="trade-form-selector"
              label={type}
              onClick={() => {
                setTradeType(type);
              }}
              selectedState={tradeType}
            />
          );
        })}
        <div className={classes["layout-helper"]}></div>
      </div>

      <div className={classes["input-sec"]}>
        <div className={classes["form-switchers"]}>
          <FormSwitcherBtn
            visiableFormState={activeForm}
            onClick={showSellFormHandler}
            transaction="sell"
          />
          <FormSwitcherBtn
            visiableFormState={activeForm}
            onClick={showBuyFormHandler}
            transaction="buy"
          />
        </div>
        <div className={classes["select-order-type"]}>
          <DynamicContentWindow
            actions={orderTypes}
            onDispatchTabsChanges={dispatchSelectedOrderType}
            tabsState={selectedOrderType}
          />
        </div>

        <TradeInputs
          formType="sell"
          orderType={selectedOrderType}
          activeForm={activeForm}
        />
        <TradeInputs
          formType="buy"
          orderType={selectedOrderType}
          activeForm={activeForm}
        />
      </div>
    </div>
  );
};

export default TradeForm;
