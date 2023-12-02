import React, { useEffect, useReducer, useState } from "react";
import classes from "./TradeInputs.module.css";
import InputBox from "./InputBox";
import AVBLPercentage from "./AVBLPercentage";
import { Link, createRoutesFromChildren } from "react-router-dom";
import BuySellBtn from "./BuySellBtn";
import useGetAssets from "../../hooks/use-get-assets";
import TradeFormErrors from "./TradeFormErrors";
import { useTradeForm } from "../../hooks/use-trade-form";
import { useDispatch, useSelector } from "react-redux";
import { tradingActions } from "../../store/trading-data";
import { roundTo } from "../../util/round-number";

const TradeInputs = ({ formType, orderType, activeForm }) => {
  const uid = useSelector((state) => state.auth.uid);
  const userAssets = useGetAssets();

  const { formIsValid, stopInput, priceInput, amountInput, errorMessages } =
    useTradeForm(formType, orderType);

  const tetherVal =
    userAssets.data && uid ? roundTo(userAssets.data.tether, 2) : "-";
  const pairVal =
    userAssets.data && uid ? roundTo(userAssets.data.bitcoin, 2) || 0 : "-";

  return (
    <form
      className={`${classes["inputs-container"]} ${
        classes[formType === activeForm ? "show-form" : ""]
      }`}
    >
      <div className={classes["avbl"]}>
        <div className={classes["title"]}>موجودی حساب</div>
        <div className={classes["value"]}>
          {formType === "buy" ? tetherVal : pairVal}
          <span>{formType === "buy" ? "تتر" : "بیت کوین"}</span>
        </div>
      </div>

      {orderType.state === "STOP_LIMIT" && (
        <InputBox
          value={stopInput.value}
          isValid={true}
          onChange={stopInput.valueChangeHandler}
          onBlur={stopInput.inputblurHandler}
          hasError={stopInput.hasError}
          name={{ en: "stop", fa: "حد ضرر" }}
          unit={{ en: "USDT", fa: "تتر" }}
          formType={formType}
          disabled={!uid}
        />
      )}

      <InputBox
        onChange={priceInput.valueChangeHandler}
        onBlur={priceInput.inputblurHandler}
        value={
          orderType.state === "MARKET" ? "قیمت فعلی بازار" : priceInput.value
        }
        hasError={priceInput.hasError}
        name={{ en: "price", fa: "قیمت" }}
        unit={{ en: "USDT", fa: "تتر" }}
        disabled={orderType.state === "MARKET" || !uid}
        formType={formType}
      />

      <InputBox
        value={amountInput.value}
        isValid={amountInput.isValid}
        onChange={amountInput.valueChangeHandler}
        onBlur={amountInput.inputblurHandler}
        hasError={amountInput.hasError}
        name={{ en: "amount", fa: "مقدار" }}
        unit={{ en: "btc", fa: "بیت کوین" }}
        formType={formType}
        disabled={!uid}
      />
      <AVBLPercentage formType={formType} />
      <BuySellBtn formType={formType} disabled={!formIsValid} />
      <TradeFormErrors errors={errorMessages} />
    </form>
  );
};

export default TradeInputs;
