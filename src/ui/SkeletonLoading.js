import React from "react";

import classes from "./SkeletonLoading.module.css";

const SkeletonLoading = ({ isVisible = true, style }) => {
  if (!isVisible) return null;
  return (
    <div
      className={`${classes["SkeletonLoading"]} absolute-full-page`}
      style={style}
    >
      <div className={`${classes["skeleton"]}`}></div>
    </div>
  );
};

export default SkeletonLoading;
