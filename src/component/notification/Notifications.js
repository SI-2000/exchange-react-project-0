import React from "react";

import classes from "./Notifications.module.css";
import { useSelector } from "react-redux";
import NotificationItem from "./NotificationItem";

const Notifications = () => {
  const notes = useSelector((state) => state.notes);

  return (
    <div className={`${classes["Notifications"]}`}>
      <div className={classes["notification-wrapper"]}>
        {notes.map((note) => {
          return <NotificationItem key={note.id} {...note} />;
        })}
      </div>
    </div>
  );
};

export default Notifications;
