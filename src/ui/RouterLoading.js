import React from "react";

import classes from "./RouterLoading.module.css";

const RouterLoading = () => {
  return (
    <div className={`${classes["RouterLoading"]}`}>
      <div className={classes["middle"]}>
        <div className={`${classes["bars"]}`}>
          <div className={`${classes["bar"]} ${classes["bar1"]}`}></div>
          <div className={`${classes["bar"]} ${classes["bar2"]}`}></div>
          <div className={`${classes["bar"]} ${classes["bar3"]}`}></div>
          <div className={`${classes["bar"]} ${classes["bar4"]}`}></div>
          <div className={`${classes["bar"]} ${classes["bar5"]}`}></div>
          <div className={`${classes["bar"]} ${classes["bar6"]}`}></div>
          <div className={`${classes["bar"]} ${classes["bar7"]}`}></div>
          <div className={`${classes["bar"]} ${classes["bar8"]}`}></div>
        </div>
        <div className={`${classes["text"]}`}>در حال بارگذاری...</div>
      </div>
    </div>
  );
};

export default RouterLoading;
