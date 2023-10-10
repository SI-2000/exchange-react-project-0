import React from "react";

import classes from "./TradeInputs.module.css";
import InputBox from "./InputBox";
import AVBLPercentage from "./AVBLPercentage";
import { Link } from "react-router-dom";
import BuySellBtn from "./BuySellBtn";
import { act } from "react-dom/test-utils";

const TradeInputs = ({ orderType, activeForm }) => {
  return (
    <div className={classes["inputs-container"]}>
      <div className={classes["avbl"]}>
        <div className={classes["title"]}>موجودی حساب</div>
        <div className={classes["value"]}>
          46746<span>{activeForm === "buy" ? "تتر" : "بیت کوین"}</span>
        </div>
      </div>
      {orderType.state === "STOP_LIMIT" && (
        <InputBox
          name={{ en: "stop", fa: "حد ضرر" }}
          unit={{ en: "USDT", fa: "تتر" }}
        />
      )}

      <InputBox
        value={orderType.state === "MARKET" ? "قیمت فعلی بازار" : null}
        name={{ en: "price", fa: "قیمت" }}
        unit={{ en: "USDT", fa: "تتر" }}
        disabled={orderType.state === "MARKET"}
      />

      <InputBox
        name={{ en: "amount", fa: "مقدار" }}
        unit={{ en: "btc", fa: "بیت کوین" }}
      />
      <AVBLPercentage />
      <BuySellBtn activeForm={activeForm} />
    </div>
  );
};

export default TradeInputs;
