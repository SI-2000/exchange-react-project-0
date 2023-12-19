import React from "react";
import classes from "./PrimaryData.module.css";
import { useDispatch } from "react-redux";
import { searchPairsActions } from "../../store/search-pairs";
import SkeletonLoading from "../../ui/SkeletonLoading";
import numToRoundedString from "../../util/num-to-rounded-string";
import { roundTo } from "../../util/round-number";

const PrimaryData = ({ data, isLoading }) => {
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div className={`${classes["PrimaryData"]}`}>
        <SkeletonLoading />
      </div>
    );
  }

  const {
    symbol,
    lastPrice,
    priceChange,
    priceChangePercent,
    highPrice,
    lowPrice,
    quoteVolume,
  } = data.coinInfo;


  return (
    <div className={`${classes["PrimaryData"]}`}>
      <div className={`${classes["primary-data"]}`}>
        <div className={`${classes["col"]} ${classes["name-price"]}`}>
          <div
            onClick={() => {
              dispatch(searchPairsActions.open());
            }}
            className={`${classes["name"]} ${classes["searchOverlay-btn"]}`}
          >
            {symbol}
          </div>
          <div className={classes["name"]}>{symbol}</div>
          <div className={classes["price-change"]}>
            <div className={classes["price"]}>
              $ {roundTo(lastPrice.toString(), 2)}
            </div>
            <div className={`${classes["key-value"]} ${classes["change"]}`}>
              <h5>تغییرات 24 ساعت</h5>
              <div>
                <span
                  className={`${classes["percentage"]} ${
                    priceChangePercent >= 0 ? "positive" : "negative"
                  }`}
                >
                  {roundTo(priceChangePercent.toString(), 2)}%
                </span>
                <span
                  className={`${classes["amount"]} ${
                    priceChangePercent >= 0 ? "positive" : "negative"
                  }`}
                >
                  {roundTo(priceChange.toString(), 2)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes["col"]}>
          <div className={`${classes["key-value"]} ${classes["high-24h"]}`}>
            <h5>بالاترین</h5>
            <span>{roundTo(highPrice.toString(), 2)}</span>
          </div>
          <div className={`${classes["key-value"]} ${classes["low-24h"]}`}>
            <h5>پایین ترین</h5>
            <span>{roundTo(lowPrice.toString(), 2)}</span>
          </div>
        </div>
        <div className={classes["col"]}>
          <div className={`${classes["key-value"]} ${classes["volume"]}`}>
            <h5>حجم 24 ساعت</h5>
            <span>{roundTo(quoteVolume.toString(), 2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryData;
