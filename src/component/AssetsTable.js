import React from "react";

import classes from "./AssetsTable.module.css";
import AssetItem from "./AssetItem";

const AssetsTable = ({ assetsInfo }) => {
  return (
    <table className={`${classes["assets-table"]}`}>
      <thead>
        <tr className={`${classes["headers-wrapper"]}`}>
          <th className={classes["name"]}>نام</th>
          <th className={classes["amount"]}>مقدار</th>
          <th className={classes["price"]}>قیمت</th>
          <th className={classes["total-value"]}>ارزش کل</th>
          <th className={classes["buy-sell-btn"]}></th>
        </tr>
      </thead>
      <tbody>
        {assetsInfo.map((assetInfo, index) => {
          return <AssetItem key={index} assetInfo={assetInfo} />;
        })}
      </tbody>
    </table>
  );
};

export default AssetsTable;
