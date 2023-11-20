import React from "react";

import classes from "./AssetsPage.module.css";
import WhiteFrame from "../ui/WhiteFrame";
import { formatPrice } from "../util/format-price";
import AssetItem from "../component/AssetItem";
import tableClasses from "../component/assestTable.module.css"

const AssetsPage = () => {
  return (
    <div className={classes["assets-container"]}>
      <div className={classes["base-info"]}>
        <div className={classes["base-assets"]}>
          <h6>ارزش کل دارایی ها</h6>
          <h1>
            {formatPrice(1000000)}
            <span>$</span>
          </h1>
        </div>
      </div>

      <WhiteFrame>
        <div className={classes["currencies-container"]}>
          <div className={`${classes["title-header"]} ${tableClasses["row"]}`}>
            <div className={tableClasses["name"]}>نام</div>
            <div className={tableClasses["amount"]}>مقدار دارایی</div>
            <div className={tableClasses["price"]}>قیمت</div>
            <div className={tableClasses["buy-sell-btn"]}></div>
          </div>
          <AssetItem />
          <AssetItem />
          <AssetItem />
          <AssetItem />
          <AssetItem />
        </div>
      </WhiteFrame>
    </div>
  );
};

export default AssetsPage;
