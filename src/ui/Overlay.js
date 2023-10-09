import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";

import classes from "./Overlay.module.css";

const Overly = ({
  children,
  classNamesList = [],
  overlayIsOpen = false,
  onClickBackdrop = () => {},
}) => {
  console.log(classNamesList);
  let classesTemplate = `${classes["Overlay"]} ${
    classes[overlayIsOpen ? "shown" : ""]
  }`;
  classNamesList.forEach((class_name) => {
    classesTemplate += ` ${classes[class_name]}`;
  });

  return (
    <div className={classesTemplate}>
      {children}
      {overlayIsOpen &&
        ReactDOM.createPortal(
          <Backdrop onClick={onClickBackdrop} />,
          document.getElementById("backdrop-root")
        )}
    </div>
  );
};

export default Overly;
