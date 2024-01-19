import React, { useEffect, useState } from "react";

import classes from "./OrderBook.module.css";
import CustomTable from "../CustomTable";
import { OBDataProducer } from "../../util/trade-page/order-book-producer";
import MarketPriceOB from "./MarketPriceOB";
import SkeletonLoading from "../../ui/SkeletonLoading";

const header_titles = [
  { en: "price", fa: "قیمت" },
  { en: "amount", fa: "مقدار" },
  { en: "total", fa: "کل" },
];

const OrderBook = ({ data, className, isLoading }) => {
  if (isLoading) {
    return (
      <div className={`${classes["OrderBook"]} ${classes[className]}`}>
        <SkeletonLoading />
      </div>
    );
  }



  const [sellOBData, buyOBData, volumeBar, marketPrice] = OBDataProducer(
    data.depth
  );


  return (
    <div className={`${classes["OrderBook"]} ${classes[className]}`}>
      <div className={`${classes["order-book"]}`}>
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
    </div>
  );
};

export default OrderBook;
