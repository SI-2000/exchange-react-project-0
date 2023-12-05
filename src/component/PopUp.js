import React from "react";
import ReactDOM from "react-dom"

import classes from "./PopUp.module.css";

const PopUpElement = ({children}) =>{
    return <div className={`${classes["PopUpElement"]}`}>
{children}
    </div>
}

const PopUp = ({children, }) => {
  return (
    <div className={`${classes["PopUp"]}`}>
      {ReactDOM.createPortal(<PopUpElement>{children}</PopUpElement>, document.getElementById("pop-up"))}
    </div>
  );
};

export default PopUp;
