import React from "react";

import classes from "./AVBLPercentage.module.css";
import useGetAssets from "../../hooks/use-get-assets";
import { useDispatch, useSelector } from "react-redux";
import { tradingActions } from "../../store/trading-data";
import { roundTo } from "../../util/round-number";

const AVBLPercentage = ({ formType }) => {
  const uid = useSelector((state) => state.auth.uid);
  const assets = useGetAssets();

  const dataIsAvailable = !!assets.data;
  const pair = useSelector((state) => state.tradingData.pairs);
  const dispatch = useDispatch();

  const buttonClickHandler = (event, percentage) => {
    event.preventDefault();
    if (dataIsAvailable) {
      if (formType === "buy") {
        const newInputValue = +assets.data.tether * percentage;
        dispatch(
          tradingActions.updateOneInput({
            formType,
            inputName: "amount",
            value: {
              value: newInputValue.toString(),
              isValid: true,
              isToched: true,
            },
          })
        );
      } else if (formType === "sell") {
        const newInputValue = +assets.data[pair] * percentage;

        dispatch(
          tradingActions.updateOneInput({
            formType,
            inputName: "amount",
            value: {
              value: newInputValue.toString(),
              isValid: true,
              isToched: true,
            },
          })
        );
      }
    }
  };

  return (
    <div className={classes["percentage"]}>
      <button
        onClick={(e) => {
          buttonClickHandler(e, 0.25);
        }}
        className={classes["p25"]}
        disabled={!uid}
      >
        25%
      </button>
      <button
        onClick={(e) => {
          buttonClickHandler(e, 0.5);
        }}
        className={classes["p50"]}
        disabled={!uid}
      >
        50%
      </button>
      <button
        onClick={(e) => {
          buttonClickHandler(e, 0.75);
        }}
        className={classes["p75"]}
        disabled={!uid}
      >
        75%
      </button>
      <button
        onClick={(e) => {
          buttonClickHandler(e, 1);
        }}
        className={classes["p100"]}
        disabled={!uid}
      >
        100%
      </button>
    </div>
  );
};

export default AVBLPercentage;
