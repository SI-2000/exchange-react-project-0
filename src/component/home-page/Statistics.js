import React, { useRef } from "react";

import classes from "./Statistics.module.css";
import WhiteFrame from "../../ui/WhiteFrame";
import StatisticsCounter from "./StatisticsCounter";
import useElementVisibility from "../../hooks/use-element-visibility";

const Statistics = () => {
  const ref = useRef();

  const { seen } = useElementVisibility(ref);

  return (
    <div className={`${classes["Statistics"]}`} ref={ref}>
      <WhiteFrame className="stretchable">
        <div className={`${classes["container"]}`}>
          <h1 className={`${classes["table-capiton"]}`}>
            اعتبار ما کاربران ما هستند
          </h1>
          <div className={`${classes["background-holder"]}`}>
            {seen && (
              <div className={`${classes["counter-container"]} fade-in--up`}>
                <StatisticsCounter
                  className="markets"
                  num={200}
                  incrementDelay={10}
                  leftStr="+"
                  caption="بازار"
                />
                <StatisticsCounter
                  className="transactions"
                  num={100}
                  leftStr="+"
                  rightStr="M"
                  caption="تعداد معاملات"
                />
                <StatisticsCounter
                  className="users"
                  num={1}
                  step={0.1}
                  incrementDelay={50}
                  leftStr="+"
                  rightStr="M"
                  caption="تعداد کاربران"
                />
              </div>
            )}
          </div>
        </div>
      </WhiteFrame>
    </div>
  );
};

export default Statistics;
