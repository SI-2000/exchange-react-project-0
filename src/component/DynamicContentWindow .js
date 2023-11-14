// Creates a tab bar and a window to display different content based on the selected tab

import React from "react";

import classes from "./DynamicContentWindow.module.css";

const DynamicContentWindow = ({
  actions,
  onDispatchTabsChanges,
  tabsState,
}) => {
  const tabsClasses = {};
  Object.keys(tabsState.buttonsClass).forEach((tab) => {
    tabsClasses[tab] = tabsState.buttonsClass[tab];
  });

  return (
    <div className={classes["tabs"]}>
      {actions.map((action, index) => {
        const actionType = Object.keys(action)[0];
        const actionLabel = Object.values(action)[0];
        return (
          <button
            key={index}
            type="button"
            onClick={() => onDispatchTabsChanges({ type: actionType })}
            className={`${classes[actionType]} ${
              classes[tabsClasses[actionType]]
            }`}
          >
            {actionLabel}
          </button>
        );
      })}
    </div>
  );
};

export default DynamicContentWindow;
