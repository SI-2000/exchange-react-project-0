import React from "react";
import ReactDOM from "react-dom";
import { Form, Link, NavLink } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";

import { ReactComponent as CloseIcon } from "../files/icons/close_FILL0_wght400_GRAD0_opsz48.svg";

import classes from "./MainNavigation.module.css";
import { useLogout } from "../hook/use-logout";
import { useSelector } from "react-redux";

const Backdrop = ({ onClick }) => {
  return <div className={classes["backdrop"]} onClick={onClick}></div>;
};

const MainNavigation = ({ className, navIsOpen, onCloseNav }) => {
  const uid = useSelector((state) => state.auth.uid);
  const logoutHandler = useLogout(onCloseNav);

  return (
    <nav className={`${classes["main-nav"]} ${classes[className]}`}>
      <CloseIcon className={classes["close-icon"]} onClick={onCloseNav} />
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            onClick={onCloseNav}
            end
          >
            خانه
          </NavLink>
        </li>
        <li>
          <NavLink
            to="currencies-list"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            onClick={onCloseNav}
          >
            فهرست ارز ها
          </NavLink>
        </li>
        <li>
          <NavLink
            to="assets"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            onClick={onCloseNav}
          >
            دارایی ها
          </NavLink>
        </li>
        <li>
          <NavLink
            to="unimportant-page"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            onClick={onCloseNav}
          >
            تماس با ما
          </NavLink>
        </li>
        <li>
          <NavLink
            to="coins/bitcoin"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            onClick={onCloseNav}
          >
            coins/bitcoin
          </NavLink>
        </li>
        {!uid && (
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={onCloseNav}
              to="auth/?mode=login"
            >
              ورود
            </NavLink>
          </li>
        )}
        {uid && (
          <li>
            <button className={classes["logout-btn"]} onClick={logoutHandler}>
              خروج
            </button>
          </li>
        )}
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
