import React from "react";

import CustomTable from "../CustomTable";

import classes from "./Trades.module.css";
import { tradesProducer } from "../../util/trade-page/trades-producer";

const Trades = ({ data, className }) => {
  const header_titles = [
    { en: "price", fa: "قیمت" },
    { en: "amount", fa: "مقدار" },
    { en: "time", fa: "زمان" },
  ];

  const [buttons, btnClassNames] = tradesProducer(data);

  return (
    <div className={`${classes["trades"]} ${classes[className]}`}>
      <CustomTable
        className="trades"
        btnClassNames={btnClassNames}
        header_titles={header_titles}
        buttons={buttons}
      />
    </div>
  );
};

export default Trades;
