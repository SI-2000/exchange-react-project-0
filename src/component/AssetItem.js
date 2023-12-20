import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { roundTo } from "../util/round-number";
import { ReactComponent as MoreBtn } from "../files/icons/more_vert_FILL0_wght400_GRAD0_opsz24.svg";
import classes from "./AssetItem.module.css";
import TradeOverlay from "./TradeOverlay";
import { formatPrice } from "../util/format-price";
import CustomLink from "./CustomLink";

const AssetItem = ({ assetInfo }) => {
  const [overlyIsVisiable, setOverlyIsVisiable] = useState(false);

  const { id, symbol, image, price, amount, total_value } = assetInfo;

  return (
    <tr className={`${classes["assets-item"]}`}>
      <td className={classes["name"]}>
        <img alt={id} src={image} />
        <div className={classes["name-symbol"]}>
          <h3>{id.toUpperCase().replace(/-/g, " ")}</h3>
          <p>{symbol.toUpperCase()}</p>
        </div>
      </td>
      <td className={classes["amount"]}>
        {formatPrice(roundTo(amount.toString(), 2))}
      </td>
      <td className={`${classes["price"]}`}>
        {formatPrice(roundTo(price.toString(), 2))} $
      </td>
      <td className={classes["total-value"]}>
        {formatPrice(roundTo(total_value.toString(), 2))}
      </td>
      {symbol !== "usdt" ? (
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
      ) : (
        <td className={classes["buy-sell-btn"]}></td>
      )}
    </tr>
  );
};

export default AssetItem;
