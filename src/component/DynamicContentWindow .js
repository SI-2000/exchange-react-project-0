// Creates a tab bar and a window to display different content based on the selected tab

import React from "react";

import classes from "./DynamicContentWindow.module.css";

const DynamicContentWindow = ({
  actions,
  displayClasses,
  onChangeActiveState,
}) => {



  return (
    <div className={classes["tabs"]}>
      {actions.map((action) => {
        const actionType = Object.keys(action)[0]
        const actionLabel = Object.values(action)[0]
        console.log(displayClasses.actionType)
        return (
        
          <button
            onClick={() => onChangeActiveState({ type: actionType})}
            className={`${classes[actionType]} ${classes[displayClasses[actionType]]}`}
          >
            {actionLabel}
          </button>
        );
      })}
    </div>
  );
};

export default DynamicContentWindow;
