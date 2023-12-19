import React, { useEffect, useState } from "react";

import classes from "./RouterLoading.module.css";

const RouterLoading = () => {
  const [showRegionMsg, setShowRegionMsg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRegionMsg(true);
    }, 4000);
  }, []);

  return (
    <div className={`${classes["RouterLoading"]}`}>
      <div className={classes["container"]}>
        <h1>ایزی بیت</h1>
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
        <div className={`${classes["region-msg"]}`}>
          {showRegionMsg && (
            <p className="fade-in--up">
              لطفا از اتصال VPN خود مطمئن شوید. این برنامه از api هایی مانند
              Firebase و Binance استفاده میکند که تحت تحریم هستند.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RouterLoading;
