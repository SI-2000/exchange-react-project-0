import React from "react";
import { Link } from "react-router-dom";
import CurrenciesTItem from "./CurrenciesTItem";
import classes from "./CurrenciesTable.module.css";
import { useQuery } from "react-query";
import { getCurrenciesInfo } from "../util/get-currencies";
import { current } from "@reduxjs/toolkit";

const CurrenciesTable = ({ currencies }) => {
  const currenciesQuery = useQuery({
    queryKey: "currencies",
    queryFn: getCurrenciesInfo,
    // staleTime:Infinity,
  });

  if (currenciesQuery.isLoading) return <p>loading...</p>;
  if (currenciesQuery.isError)
    return <p>{JSON.stringify(currenciesQuery.error)}</p>;

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
        {currenciesQuery.data.map((currencyInfo, index) => {
          return <CurrenciesTItem key={index} currencyInfo={currencyInfo} />;
        })}
      </tbody>
    </table>
  );
};

export default CurrenciesTable;

export function loader() {}
