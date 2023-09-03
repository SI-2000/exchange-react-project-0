import React from "react";

import { Link } from "react-router-dom";
import CurrenciesTItem from "./CurrenciesTItem";

import classes from "./CurrenciesTable.module.css";

const currencies = [
  { coinId: "bitcoin", fname: "بیت کوین" },
  { coinId: "ethereum", fname: "اتریوم" },
  { coinId: "cardano", fname: "کاردانو" },
  { coinId: "binancecoin", fname: "بایننس کوین" },
];

const CurrenciesTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>نام</th>
          <th className={classes["price"]}>قیمت</th>
          <th className={classes["change"]}>تغییر 24h</th>
          <th className={classes["volume"]}>حجم 24h</th>
          <th className={classes["buy-sell-btn"]}></th>
        </tr>
      </thead>
      <tbody>
        {currencies.map((c) => {
          return <CurrenciesTItem currencyInfo={c} />;
        })}
      </tbody>
    </table>
  );
};

export default CurrenciesTable;

export function loader() {}
