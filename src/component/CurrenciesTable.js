import React from "react";
import { Link } from "react-router-dom";
import CurrenciesTItem from "./CurrenciesTItem";
import classes from "./CurrenciesTable.module.css";
import { useQuery } from "react-query";
import { getCurrenciesInfo } from "../util/get-currencies";

const CurrenciesTable = ({ queryData }) => {
  if (queryData.isLoading) return <p>loading...</p>;
  if (queryData.isError) return <p>{JSON.stringify(queryData.error)}</p>;

  let tableData;
  try {
    tableData = queryData.data.pages.flatMap((page) => page.currencies);
  } catch (error) {
    tableData = queryData.data.currencies;
  }

  return (
    <table className={`${classes["currencies-table"]}`}>
      <thead>
        <tr className={`${classes["headers-wrapper"]}`}>
          <th className={classes["name"]}>نام</th>
          <th className={classes["price"]}>قیمت</th>
          <th className={classes["change"]}>تغییر 24h</th>
          <th className={classes["volume"]}>حجم 24h</th>
          <th className={classes["buy-sell-btn"]}></th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((currencyInfo, index) => {
          return <CurrenciesTItem key={index} currencyInfo={currencyInfo} />;
        })}
      </tbody>
    </table>
  );
};

export default CurrenciesTable;

export function loader() {}
