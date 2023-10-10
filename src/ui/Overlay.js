import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";

import classes from "./Overlay.module.css";

const Overlay = ({
  children,
  className = "",
  overlayIsOpen = false,
  onClickBackdrop = () => {},
}) => {
  const classesTemplate = `${classes["overlay"]} ${classes[className]} ${
    classes[overlayIsOpen ? "show-" + className : undefined]
  }`;

console.log(classesTemplate)
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

export default Overlay;
