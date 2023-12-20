import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { roundTo } from "../util/round-number";
import { ReactComponent as MoreBtn } from "../files/icons/more_vert_FILL0_wght400_GRAD0_opsz24.svg";
import classes from "./CurrenciesTItem.module.css";
import TradeOverlay from "./TradeOverlay";
import { formatPrice } from "../util/format-price";
import CustomLink from "./CustomLink";

const CurrenciesTItem = ({ currencyInfo }) => {
  const [overlyIsVisiable, setOverlyIsVisiable] = useState(false);

  const {
    id,
    symbol,
    image,
    current_price,
    market_cap_change_percentage_24h: change,
    total_volume: volume,
  } = currencyInfo;

  return (
    <tr className={`${classes["currencies-item"]}`}>
      <td className={classes["name"]}>
        <img alt={currencyInfo.coinId} src={image} />
        <div className={classes["name-symbol"]}>
          <h3>{id.toUpperCase().replace(/-/g, " ")}</h3>
          <p>{symbol.toUpperCase()}</p>
        </div>
      </td>
      <td className={classes["price"]}>
        {formatPrice(roundTo(current_price, 2))} $
      </td>
      <td
        className={`${classes["change"]} ${
          change >= 0 ? classes["increased"] : classes["decreased"]
        }`}
      >
        {change >= 0 && "+"}
        {roundTo(change, 2)}%
      </td>
      <td className={classes["volume"]}>{formatPrice(volume.toString())}</td>
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
          <TradeOverlay
            symbol={symbol}
            onClickOnBG={setOverlyIsVisiable}
            className="currency-item--trade-overlay"
          />
        )}
        <CustomLink
          to={`/coins/${symbol.toUpperCase()}USDT`}
          className="currency-list-btn"
        >
          خرید و فروش
        </CustomLink>
      </td>
    </tr>
  );
};

export default CurrenciesTItem;
