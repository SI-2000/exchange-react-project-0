import React from "react";
import CurrenciesTItem from "./CurrenciesTItem";
import classes from "./CurrenciesTable.module.css";

const CurrenciesTable = ({ queryData }) => {
  if (!queryData.data)
    return (
      <p className={`${classes["connection-message"]}`}>
        مشکلی در دسترسی به داده ها وجود دارد. لطفا اتصال اینترنت و vpn خود را
        بررسی کنید.
      </p>
    );


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
