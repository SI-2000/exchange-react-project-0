import React, { useEffect, useState } from "react";

import classes from "./OrderBook.module.css";
import CustomTable from "../CustomTable";
import { OBDataProducer } from "../../util/trade-page/order-book-producer";
import MarketPriceOB from "./MarketPriceOB";

const header_titles = [
  { en: "price", fa: "قیمت" },
  { en: "amount", fa: "مقدار" },
  { en: "total", fa: "کل" },
];

const OrderBook = ({ data, className }) => {
  const [sellOBData, buyOBData, volumeBar, marketPrice] =
    OBDataProducer(data);

  return (
    <div className={`${classes["order-book"]} ${classes[className]}`}>
      <CustomTable
        className="sell-order-book"
        header_titles={header_titles}
        buttons={sellOBData}
        volumeBarPerc={volumeBar.sell}
      />
      <MarketPriceOB price={marketPrice} />
      <CustomTable
        className="buy-order-book"
        header_titles={header_titles}
        buttons={buyOBData}
        volumeBarPerc={volumeBar.buy}
      />
    </div>
  );
};

export default OrderBook;
