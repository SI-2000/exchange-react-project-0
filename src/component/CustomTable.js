import React, { useEffect } from "react";

import classes from "./CustomTable.module.css";

const CustomTable = ({ header_titles, buttons, className, volumeBarPerc }) => {
  const titles = [];
  header_titles.forEach((title) => {
    titles.push(title.en);
  });

  useEffect(() => {}, []);

  return (
    <div className={`${classes["custom-table"]} ${classes[className]}`}>
      <form>
        <input type="text" />
      </form>
      <div className={classes["header"]}>
        {header_titles.map((title) => {
          return (
            <div
              key={title.en}
              className={`${classes["header-title"]} ${classes[title.en]}`}
            >
              {title.fa}
            </div>
          );
        })}
      </div>
      <div className={classes["buttons-list"]}>
        {buttons.map((btn, index) => {
          return (
            <div className={classes["row"]}>
              <div
                style={{ width: `${volumeBarPerc[index]}%` }}
                className={classes["volume-bar"]}
              ></div>
              <div className={classes["buttons"]}>
                <button className={classes[titles[0]]}>{btn[titles[0]]}</button>
                <button className={classes[titles[1]]}>{btn[titles[1]]}</button>
                <button className={classes[titles[2]]}>{btn[titles[2]]}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomTable;
