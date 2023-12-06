import React from "react";
import classes from "./TotalAssetAmount.module.css";
import { roundTo } from "../../util/round-number";
import { formatPrice } from "../../util/format-price";

const TotalAssetAmount = ({ assetsData }) => {
  const total_assets = assetsData.reduce((initialValue, assetItem) => {
    return initialValue + assetItem.total_value;
  }, 0);
  return (
    <div className={`${classes["TotalAssetAmount"]}`}>
      <div className={classes["base-assets"]}>
        <h6>ارزش کل دارایی ها</h6>
        <h1>
          {formatPrice(roundTo(total_assets.toString(), 2))}
          <span> $</span>
        </h1>
      </div>
    </div>
  );
};

export default TotalAssetAmount;
