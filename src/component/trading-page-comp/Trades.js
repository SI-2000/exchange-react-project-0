import React from "react";

import classes from "./Trades.module.css";

const Trades = ({className}) => {
  return <div className={`${classes["trades"]} ${classes[className]}`}></div>;
};

export default Trades;
