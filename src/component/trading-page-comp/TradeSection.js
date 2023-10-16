import React, { useState } from "react";
import ReactDOM from "react-dom";
import Overlay from "../../ui/Overlay";

import classes from "./TradeSection.module.css";
import TradeForm from "./TradeForm";

const TradeSection = () => {
  const [tradeFormIsOpen, setTradeFormIsOpen] = useState(false);
  const [activeForm, setActiveForm] = useState("buy");

  function openBuyFormOverlayHandler() {
    setActiveForm("buy");
    setTradeFormIsOpen(true);
  }
  function openSellFormOverlayHandler() {
    setActiveForm("sell");
    setTradeFormIsOpen(true);
  }
  function closeFormOverlayHandler() {
    setTradeFormIsOpen(false);
  }

  return (
    <div className={classes["trade-sec"]}>
        <div className={classes["show-form-btns"]}>
          <button
            onClick={openSellFormOverlayHandler}
            className={classes["sell"]}
          >
            فروش
          </button>
          <button
            onClick={openBuyFormOverlayHandler}
            className={classes["buy"]}
          >
            خرید
          </button>
        </div>
      {ReactDOM.createPortal(
        <Overlay
          className={"trade-form-overlay"}
          onClickBackdrop={closeFormOverlayHandler}
          overlayIsOpen={tradeFormIsOpen}
        >
          <TradeForm
            className="max-770"
            activeForm={activeForm}
            setActiveForm={setActiveForm}
          />
        </Overlay>,
        document.getElementById("overlay")
      )}
      <TradeForm
        className="min-770"
        activeForm={activeForm}
        setActiveForm={setActiveForm}
      />
    </div>
  );
};

export default TradeSection;
