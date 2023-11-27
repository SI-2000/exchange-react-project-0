import React from "react";

import classes from "./SkeletonLoading.module.css";

const SkeletonLoading = ({ isVisible }) => {
  if (!isVisible) return null;
  return (
    <div className={`${classes["SkeletonLoading"]} absolute-full-page`}>
      <div className={`${classes["skeleton"]}`}></div>
    </div>
  );
};

export default SkeletonLoading;
