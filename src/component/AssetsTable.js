import React from "react";

import classes from "./AssetsTable.module.css";
import AssetItem from "./AssetItem";
import { useQuery } from "react-query";
import { getCurrenciesInfo } from "../util/get-currencies";

const AssetsTable = () => {
  const currenciesQuery = useQuery({
    queryKey: "currencies",
    queryFn: getCurrenciesInfo,
    // staleTime:Infinity,
  });

  if (currenciesQuery.isLoading) return <p>loading...</p>;
  if (currenciesQuery.isError)
    return <p>{JSON.stringify(currenciesQuery.error)}</p>;

  return (
    <table className={`${classes["assets-table"]}`}>
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
        {currenciesQuery.data.map((currencyInfo, index) => {
          return <AssetItem key={index} currencyInfo={currencyInfo} />;
        })}
      </tbody>
    </table>
  );
};

export default AssetsTable;
