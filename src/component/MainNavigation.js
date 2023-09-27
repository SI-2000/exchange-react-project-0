import React from "react";
import ReactDOM from "react-dom";
import { Form, Link } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";

import { ReactComponent as CloseIcon } from "../files/icons/close_FILL0_wght400_GRAD0_opsz48.svg";

import classes from "./MainNavigation.module.css";
import { useLogout } from "../hook/use-logout";

const Backdrop = ({ onClick }) => {
  return <div className={classes["backdrop"]} onClick={onClick}></div>;
};

const MainNavigation = ({ className, navIsOpen, onCloseNav }) => {
  const logoutHandler = useLogout(onCloseNav);

  return (
    <nav className={`${classes["main-nav"]} ${classes[className]}`}>
      <CloseIcon onClick={onCloseNav} />
      <ul>
        <li>
          <Link to="/" onClick={onCloseNav}>
            خانه
          </Link>
        </li>
        <li>
          <Link onClick={onCloseNav}>فهرست ارز ها</Link>
        </li>
        <li>
          <Link onClick={onCloseNav} to="auth/?mode=signup">
            ثبت نام
          </Link>
        </li>
        <li>
          <Link onClick={onCloseNav}>تماس با ما</Link>
        </li>
        <li>
          <button className={classes["logout-btn"]} onClick={logoutHandler}>
            خروج
          </button>
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
