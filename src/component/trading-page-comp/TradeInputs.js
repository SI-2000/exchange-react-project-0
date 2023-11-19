import React, { useReducer, useState } from "react";

import classes from "./TradeInputs.module.css";
import InputBox from "./InputBox";
import AVBLPercentage from "./AVBLPercentage";
import { Link, createRoutesFromChildren } from "react-router-dom";
import BuySellBtn from "./BuySellBtn";
import useGetAssets from "../../hooks/use-get-assets";
import TradeFormErrors from "./TradeFormErrors";
import { useTradeForm } from "../../hooks/use-trade-form";
import { useSelector } from "react-redux";

const TradeInputs = ({ formType, orderType, activeForm }) => {
  const userAssets = useGetAssets();

  // const [errState, setErrState] = useState({ stop: "", price: "", amount: "" });
  const errState = useSelector(
    (state) => state.tradingData.tradeForm.errorMessages[formType]
  );

  // const [formIsValid, setFromIsValid] = useState(false);
  // const tradeFormIsValid = useTradeForm(formType, orderType);

  if (userAssets.isLoading) return <p>Loading...</p>;
  if (userAssets.isError) return <p>{JSON.stringify(userAssets.error)}</p>;

  const tetherVal = userAssets.data ? userAssets.data.tether : "-";
  const pairVal = userAssets.data ? userAssets.data.bitcoin || 0 : "-";

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
          name={{ en: "stop", fa: "حد ضرر" }}
          unit={{ en: "USDT", fa: "تتر" }}
          formType={formType}
        />
      )}

      <InputBox
        value={orderType.state === "MARKET" ? "قیمت فعلی بازار" : null}
        name={{ en: "price", fa: "قیمت" }}
        unit={{ en: "USDT", fa: "تتر" }}
        disabled={orderType.state === "MARKET"}
        formType={formType}
      />

      <InputBox
        name={{ en: "amount", fa: "مقدار" }}
        unit={{ en: "btc", fa: "بیت کوین" }}
        formType={formType}
      />
      <AVBLPercentage />
      <BuySellBtn formType={formType} />
      <TradeFormErrors errors={errState} />
    </form>
  );
};

export default TradeInputs;
