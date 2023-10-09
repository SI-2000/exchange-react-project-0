import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";

import classes from "./Overly.module.css";

const Overly = ({ children, classNamesList, overlyIsOpen, onCloseOverly }) => {
  console.log(classNamesList);
  let classesTemplate = `${classes["overly"]}`;
  classNamesList.forEach((class_name) => {
    classesTemplate += ` ${classes[class_name]}`;
  });

  return (
    <div className={classesTemplate}>
      {children}
      {overlyIsOpen &&
        ReactDOM.createPortal(
          <Backdrop onClick={onCloseOverly} />,
          document.getElementById("backdrop-root")
        )}
    </div>
  );
};

export default Overly;
