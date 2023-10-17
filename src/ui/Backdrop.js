import React from "react";

import classes from "./Backdrop.module.css";

const Backdrop = ({ className, onClick }) => {
  return (
    <div
      className={`${classes["backdrop"]} ${classes[className]}`}
      onClick={onClick}
    ></div>
  );
};

export default Backdrop;
