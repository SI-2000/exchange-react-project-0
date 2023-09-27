import React from "react";

import classes from "./WhiteFrame.module.css";

const WhiteFrame = ({ children, className }) => {
  return (
    <div className={`${classes[className]} ${classes["white-frame"]}`}>
      {children}
    </div>
  );
};

export default WhiteFrame;
