import React from "react";

import CustomTable from "../CustomTable";

import classes from "./Trades.module.css";
import { tradesProducer } from "../../util/trade-page/trades-producer";
import SkeletonLoading from "../../ui/SkeletonLoading";

const Trades = ({ data, className, isLoading }) => {
  const header_titles = [
    { en: "price", fa: "قیمت" },
    { en: "amount", fa: "مقدار" },
    { en: "time", fa: "زمان" },
  ];

  if (isLoading) {
    return (
      <div style={{height:"320px"}} className={`${classes["Trades"]} ${classes[className]}`}>
        <SkeletonLoading />
      </div>
    );
  }

  const [buttons, btnClassNames] = tradesProducer(data.trades);

  return (
    <div className={`${classes["Trades"]} ${classes[className]}`}>
      <div className={`${classes["trades"]}`}>
        <CustomTable
          className="trades"
          btnClassNames={btnClassNames}
          header_titles={header_titles}
          buttons={buttons}
        />
      </div>
    </div>
  );
};

export default Trades;
