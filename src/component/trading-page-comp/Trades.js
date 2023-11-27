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

  const [buttons, btnClassNames] = tradesProducer(data);

  return (
    <div className={`${classes["Trades"]}`}>
      <SkeletonLoading isVisible={isLoading} />
      <div
        className={`${classes["trades"]} ${classes[className]} ${
          isLoading && "invisible"
        }`}
      >
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
