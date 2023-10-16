import React, { useEffect, useState } from "react";

import classes from "./OrderBook.module.css";
import CustomTable from "../CustomTable";
import { OBDataProducer } from "../../util/order-block-producer";

const header_titles = [
  { en: "price", fa: "قیمت" },
  { en: "amount", fa: "مقدار" },
  { en: "total", fa: "کل" },
];

// const buttons = [
//   { price: "435356", amount: "56567", total: "5656" },
//   { price: "435356", amount: "56567", total: "5656" },
//   { price: "435356", amount: "56567", total: "5656" },
//   { price: "435356", amount: "56567", total: "5656" },
//   { price: "435356", amount: "56567", total: "5656" },
//   { price: "435356", amount: "56567", total: "5656" },
//   { price: "435356", amount: "56567", total: "5656" },
//   { price: "435356", amount: "56567", total: "5656" },
//   { price: "435356", amount: "56567", total: "5656" },
//   { price: "435356", amount: "56567", total: "5656" },
//   { price: "435356", amount: "56567", total: "5656" },
//   { price: "435356", amount: "56567", total: "5656" },
// ];

const OrderBook = ({ className }) => {
  const [sellOBData, buyOBData, volumePercentage] = OBDataProducer();
  const [OBData, setOBData] = useState();

  useEffect(() => {
    const updateOB = setInterval(() => {
      const newData = OBDataProducer();
      setOBData(newData);
    }, 2000);
    return () => {
      clearInterval(updateOB);
    };
    // return clearInterval(updateOB);
  }, [OBData]);

  return (
    <div className={`${classes["order-book"]} ${classes[className]}`}>
      <CustomTable
        className="sell-order-book"
        header_titles={header_titles}
        buttons={sellOBData}
        volumeBarPerc={volumePercentage.sell}
      />
      <CustomTable
        className="buy-order-book"
        header_titles={header_titles}
        buttons={buyOBData}
        volumeBarPerc={volumePercentage.buy}
      />
    </div>
  );
};

export default OrderBook;
