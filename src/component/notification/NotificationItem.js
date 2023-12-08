import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import classes from "./NotificationItem.module.css";
import { notificationActions } from "../../store/notification";
import { ReactComponent as CloseIcon } from "../../files/icons/close_FILL0_wght400_GRAD0_opsz48.svg";

const NotificationItem = (props) => {
  const [exit, setExit] = useState(false);
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState(null);

  const dispatch = useDispatch();

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5;
        }

        clearInterval(id);
        return prev;
      });
    }, 20);

    setIntervalID(id);
  };

  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  const handleCloseNotification = () => {
    handlePauseTimer();
    setExit(true);
    setTimeout(() => {
      dispatch(notificationActions.removeNotification(props.id));
    }, 400);
  };

  useEffect(() => {
    if (width === 100) {
      // Close notification
      handleCloseNotification();
    }
  }, [width]);

  useEffect(() => {
    handleStartTimer();
  }, []);

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={`${classes["notification-item"]} ${
        props.type === "SUCCESS" ? classes["success"] : classes["error"]
      } ${exit ? classes["exit"] : null}`}
    >
      <div className={`${classes["inner-container"]}`}>
        <p>{props.message}</p>
        <div
          className={`${classes["close-icon"]}`}
          onClick={handleCloseNotification}
        >
          <CloseIcon />
        </div>
      </div>

      <div className={classes["bar"]} style={{ width: `${width}%` }} />
    </div>
  );
};

export default NotificationItem;
