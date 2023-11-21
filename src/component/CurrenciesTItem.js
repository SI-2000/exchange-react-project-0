import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { roundTo } from "../util/round-number";
import classes from "./CurrenciesTItem.module.css";

const CurrenciesTItem = ({ currencyInfo }) => {
  console.log(currencyInfo);

  const {
    id,
    symbol,
    image,
    current_price,
    market_cap_change_percentage_24h: change,
    total_volume: volume,
  } = currencyInfo;

  return (
    <tr>
      <td className={classes["name"]}>
        <img alt={currencyInfo.coinId} src={image} />
        <div className={classes["name-symbol"]}>
          <h3>{id.toUpperCase().replace(/-/g, " ")}</h3>
          <p>{symbol.toUpperCase()}</p>
        </div>
      </td>
      <td className={classes["price"]}>{roundTo(current_price, 4)} $</td>
      <td
        className={`${classes["change"]} ${
          change >= 0 ? classes["increased"] : classes["decreased"]
        }`}
      >
        {change >= 0 && "+"}
        {change}%
      </td>
      <td className={classes["volume"]}>{volume}</td>
      <td className={classes["buy-sell-btn"]}>
        <td className={classes["buy-sell-btn"]}>
          <button
            onClick={() => {
              setOverlyIsVisiable((prevState) => {
                return !prevState;
              });
            }}
            className={classes["more-btn"]}
          >
            <MoreBtn />
          </button>
          {overlyIsVisiable && (
            <TradeOverly onClickOnBG={setOverlyIsVisiable} />
          )}
        </td>
      </td>
    </tr>
  );
};

export default CurrenciesTItem;
