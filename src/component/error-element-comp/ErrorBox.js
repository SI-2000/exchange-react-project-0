import React from "react";

import classes from "./ErrorBox.module.css";
import WhiteFrame from "../../ui/WhiteFrame";
import { Link } from "react-router-dom";

const ErrorBox = ({ title, message }) => {
  return (
    <div className={`${classes["ErrorBox"]}`}>
      <WhiteFrame>
        <div className={`${classes["container"]}`}>
          <h1>{title}</h1>
          <p>{message}</p>
        </div>
        <div className={`${classes["back-to-home"]}`}>
          بازگشت به <Link to="/">خانه</Link>
        </div>
      </WhiteFrame>
    </div>
  );
};

export default ErrorBox;
