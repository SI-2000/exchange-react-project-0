import React, { useState } from "react";

import classes from "./AssetItem.module.css";
import tableClasses from "../assets-styles/assestTable.module.css";
import { ReactComponent as MoreBtn } from "../../../files/icons/more_vert_FILL0_wght400_GRAD0_opsz24.svg";
import TradeOverly from "../../../component/TradeOverly";

const AssetItem = () => {
  const [overlyIsVisiable, setOverlyIsShown] = useState(false);

  return (
    <div className={`${classes["asset-item"]} ${tableClasses["row"]}`}>
      <div className={`${tableClasses["name"]} ${classes["title-container"]}`}>
        <img alt={""} src={""} />
        <div className={classes["name-symbol"]}>
          <h3>{"bitcoin"}</h3>
          <p>{"btc"}</p>
        </div>
      </div>
      <div className={classes["amount"]}>6</div>
      <div className={classes["price"]}>{10000}$</div>

      <div className={classes["buy-sell-btn"]}>
        <button
          onClick={() => {
            setOverlyIsShown((prevState) => {
              return !prevState;
            });
          }}
          className={classes["more-btn"]}
        >
          <MoreBtn />
        </button>
        {overlyIsVisiable && <TradeOverly onClickOnBG={setOverlyIsShown} />}
      </div>
    </div>
  );
};

export default AssetItem;
