import React from "react";

import classes from "./HomePageTable.module.css";
import WhiteFrame from "../../ui/WhiteFrame";
import CurrenciesTable from "../CurrenciesTable";

const HomePageTable = ({ queryData }) => {
  return (
    <div className={`${classes["HomePageTable"]}`}>
      <WhiteFrame className="home-page-table">
        <div className={`${classes["container"]}`}>
          <h1 className={`${classes["table-capiton"]}`}>
            پر طرفدارترین ارز های دیجیتال را معامله کنید
          </h1>
          <CurrenciesTable queryData={queryData} />
        </div>
      </WhiteFrame>
    </div>
  );
};

export default HomePageTable;
