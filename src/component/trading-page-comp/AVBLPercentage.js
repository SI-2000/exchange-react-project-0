import React from "react";

import classes from "./AVBLPercentage.module.css";
import useGetAssets from "../../hooks/use-get-assets";
import { useDispatch, useSelector } from "react-redux";
import { tradingActions } from "../../store/trading-data";
import { roundTo } from "../../util/round-number";

const AVBLPercentage = ({ formType }) => {
  const assets = useGetAssets();

  const dataIsAvailable = !!assets.data;
  const pair = useSelector((state) => state.tradingData.tradeForm.pair);
  const dispatch = useDispatch();


  const buttonClickHandler = (event, percentage) => {
    event.preventDefault();
    if (dataIsAvailable) {
      if (formType === "buy") {
        const newInputValue = (+assets.data.tether * percentage) / 100;
        dispatch(
          tradingActions.updateInputs({
            formType,
            inputName: "amount",
            value: { value: newInputValue, isValid: true },
          })
        );
      } else if (formType === "sell") {
        const newInputValue = (+assets.data[pair] * percentage) / 100;

        dispatch(
          tradingActions.updateInputs({
            formType,
            inputName: "amount",
            value: { value: newInputValue, isValid: true },
          })
        );
      }
    }
  };

  return (
    <div className={classes["percentage"]}>
      <button
        onClick={(e) => {
          buttonClickHandler(e, 25);
        }}
        className={classes["p25"]}
      >
        25%
      </button>
      <button
        onClick={(e) => {
          buttonClickHandler(e, 50);
        }}
        className={classes["p50"]}
      >
        50%
      </button>
      <button
        onClick={(e) => {
          buttonClickHandler(e, 75);
        }}
        className={classes["p75"]}
      >
        75%
      </button>
      <button
        onClick={(e) => {
          buttonClickHandler(e, 100);
        }}
        className={classes["p100"]}
      >
        100%
      </button>
    </div>
  );
};

export default AVBLPercentage;
