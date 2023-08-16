import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import { ReactComponent as CloseIcon } from "../files/icons/close_FILL0_wght400_GRAD0_opsz48.svg";

import classes from "./MainNavigation.module.css";

const Backdrop = ({ onClick }) => {
  return <div className={classes["backdrop"]} onClick={onClick}></div>;
};

const MainNavigation = ({ className, navIsOpen, onCloseNav }) => {
  return (
    <nav className={`${classes["main-nav"]} ${classes[className]}`}>
      <CloseIcon onClick={onCloseNav} />
      <ul>
        <li>
          <Link>فهرست ارز ها</Link>
        </li>
        <li>
          <Link>ثبت نام</Link>
        </li>
        <li>
          <Link>تماس با ما</Link>
        </li>
      </ul>
      {navIsOpen &&
        ReactDOM.createPortal(
          <Backdrop onClick={onCloseNav} />,
          document.getElementById("backdrop-root")
        )}
    </nav>
  );
};

export default MainNavigation;
