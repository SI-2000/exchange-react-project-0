import React from "react";

import CustomTable from "../CustomTable";

import classes from "./Trades.module.css";
import { tradesProducer } from "../../util/trade-page/trades-producer";

const Trades = ({ className }) => {
  const header_titles = [
    { en: "price", fa: "قیمت" },
    { en: "amount", fa: "مقدار" },
    { en: "time", fa: "زمان" },
  ];

  const config = { price: "3566", row_num: 13, maxV: 0.09, minV: 0 };

  const [buttons, btnClassNames] = tradesProducer(config);

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
