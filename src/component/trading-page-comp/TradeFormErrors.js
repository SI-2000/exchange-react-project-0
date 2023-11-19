import React from "react";

import classes from "./TradeFormErrors.module.css";

const TradeFormErrors = ({ errors }) => {
  const errorsList = [...new Set(Object.values(errors).flat())];
  return (
    <div className={`${classes["TradeFormErrors"]}`}>
      <div className={`${classes["container"]}`}>
        {errorsList.map((err, index) => {
          if (err !== "") return <p key={index}>{err}</p>;
        })}
      </div>
    </div>
  );
};

export default TradeFormErrors;
