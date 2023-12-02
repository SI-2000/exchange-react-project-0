import React, { useRef } from "react";

import classes from "./Statistics.module.css";
import WhiteFrame from "../../ui/WhiteFrame";
import StatisticsCounter from "./StatisticsCounter";
import useElementVisibility from "../../hooks/use-element-visibility";

const Statistics = () => {
  const ref = useRef();

  const isVisble = useElementVisibility(ref);

  return (
    <div className={`${classes["Statistics"]}`} ref={ref}>
      <WhiteFrame className="stretchable">
        <div className={`${classes["background-holder"]}`}>
          {isVisble && (
            <div className={`${classes["container"]}`}>
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
      </WhiteFrame>
    </div>
  );
};

export default Statistics;
