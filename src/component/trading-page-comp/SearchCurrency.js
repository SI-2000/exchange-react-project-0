import React from "react";

import classes from "./SearchCurrency.module.css";
import CustomTable from "../CustomTable";

const SearchCurrency = ({ className }) => {
  const header_titles = [
    { en: "price", fa: "قیمت" },
    { en: "amount", fa: "مقدار" },
    { en: "total", fa: "کل" },
  ];

  const buttons = [
    { price: "435356", amount: "56567", total: "5656" },
    { price: "435356", amount: "56567", total: "5656" },
    { price: "435356", amount: "56567", total: "5656" },
    { price: "435356", amount: "56567", total: "5656" },
    { price: "435356", amount: "56567", total: "5656" },
    { price: "435356", amount: "56567", total: "5656" },
    { price: "435356", amount: "56567", total: "5656" },
    { price: "435356", amount: "56567", total: "5656" },
    { price: "435356", amount: "56567", total: "5656" },
    { price: "435356", amount: "56567", total: "5656" },
    { price: "435356", amount: "56567", total: "5656" },
    { price: "435356", amount: "56567", total: "5656" },
    { price: "435356", amount: "56567", total: "5656" },
    { price: "435356", amount: "56567", total: "5656" },
    { price: "435356", amount: "56567", total: "5656" },
    { price: "435356", amount: "56567", total: "5656" },
    { price: "435356", amount: "56567", total: "5656" },
    { price: "435356", amount: "56567", total: "5656" },
  ];

  return (
    <div className={classes["search-currency"]}>
      <CustomTable header_titles={header_titles} buttons={buttons} />
    </div>
  );
};

export default SearchCurrency;
