import React, { useEffect, useState } from "react";
import classes from "./StatisticsCounter.module.css";
import getDecimalCount from "../../util/get-decimal-count";
import { roundTo } from "../../util/round-number";

const StatisticsCounter = ({
  num = 100,
  incrementDelay = 10,
  step = 1,
  className,
  leftStr = "",
  rightStr = "",
  caption = "",
}) => {
  const [counter, setCounter] = useState(0);
  const decimalCount = getDecimalCount(step);

  useEffect(() => {
    if (counter < num) {
      const count = setTimeout(() => {
        setCounter((prev) => parseFloat(roundTo(prev + step, decimalCount)));
      }, incrementDelay);
      return () => clearTimeout(count);
    }
  }, [counter, num]);

  return (
    <div className={`${classes["StatisticsCounter"]} ${classes[className]}`}>
      <div className={`${classes["counter-wrapper"]}`}>
        <span> {leftStr} </span>
        {counter}
        <span className={`${classes["right-str"]}`}> {rightStr} </span>
      </div>
      <p className={`${classes["caption"]}`}>{caption}</p>
    </div>
  );
};

export default StatisticsCounter;
