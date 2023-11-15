import React, { useReducer, useState } from "react";

import classes from "./TradeInputs.module.css";
import InputBox from "./InputBox";
import AVBLPercentage from "./AVBLPercentage";
import { Link, createRoutesFromChildren } from "react-router-dom";
import BuySellBtn from "./BuySellBtn";
import { useQueryClient } from "react-query";
import useAssets from "../../hooks/use-assets";
import TradeFormErrors from "./TradeFormErrors";

const TradeInputs = ({ formType, orderType, activeForm }) => {
  const userAssets = useAssets();

  const [errState, setErrState] = useState({ stop: "", price: "", amount: "" });

  if (userAssets.isLoading) return <p>Loading...</p>;
  if (userAssets.isError) return <p>{JSON.stringify(userAssets.error)}</p>;

  const tetherVal = userAssets.data ? userAssets.data.tether : "-";
  const pairVal = userAssets.data ? userAssets.data.bitcoin || 0 : "-";

  return (
    <div
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
          onChangeErrors={setErrState}
        />
      )}

      <InputBox
        value={orderType.state === "MARKET" ? "قیمت فعلی بازار" : null}
        name={{ en: "price", fa: "قیمت" }}
        unit={{ en: "USDT", fa: "تتر" }}
        disabled={orderType.state === "MARKET"}
        onChangeErrors={setErrState}
      />

      <InputBox
        name={{ en: "amount", fa: "مقدار" }}
        unit={{ en: "btc", fa: "بیت کوین" }}
        onChangeErrors={setErrState}
      />
      <AVBLPercentage />
      <BuySellBtn formType={formType} />
      <TradeFormErrors errors={errState} />
    </div>
  );
};

export default TradeInputs;
