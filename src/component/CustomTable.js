import React, { useEffect } from "react";

import classes from "./CustomTable.module.css";

const CustomTable = ({
  header_titles,
  buttons,
  className,
  volumeBarPerc,
  btnClassNames = { col1: [], col2: [], col3: [] },
}) => {
  /*
    header_titles structure =    [ { en: "title", fa: "عنوان" } ]
    buttons =  [ { a: "A", b: "B" } ]
  */

  const titles = [];
  header_titles.forEach((title) => {
    titles.push(title.en);
  });

  return (
    <div className={`${classes["custom-table"]} ${classes[className]}`}>
      <div className={classes["header"]}>
        {header_titles.map((title, index) => {
          return (
            <div
              key={index}
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
            <div key={index} className={classes["row"]}>
              {volumeBarPerc && (
                <div
                  style={{ width: `${volumeBarPerc[index]}%` }}
                  className={classes["volume-bar"]}
                ></div>
              )}

              <div className={classes["buttons"]}>
                <button
                  className={`${classes[titles[0]]} ${
                    classes[btnClassNames.col1[index]]
                  }`}
                >
                  {btn[titles[0]]}
                </button>
                <button
                  className={`${classes[titles[1]]} ${
                    classes[btnClassNames.col2[index]]
                  }`}
                >
                  {btn[titles[1]]}
                </button>
                <button
                  className={`${classes[titles[2]]} ${
                    classes[btnClassNames.col3[index]]
                  }`}
                >
                  {btn[titles[2]]}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomTable;
