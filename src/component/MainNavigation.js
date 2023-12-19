import React from "react";
import ReactDOM from "react-dom";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../files/icons/close_FILL0_wght400_GRAD0_opsz48.svg";
import classes from "./MainNavigation.module.css";
import { useLogout } from "../hooks/use-logout";
import { useSelector } from "react-redux";
import Backdrop from "../ui/Backdrop";

const MainNavigation = ({ className, onCloseNav }) => {
  const uid = useSelector((state) => state.auth.uid);
  const logoutHandler = useLogout(onCloseNav);
  const location = useLocation();

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
        {uid && (
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
        )}

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
            to="/coins/BTCUSDT"
            className={({ isActive }) =>
              isActive || location.pathname.split("/")[1] === "coins"
                ? classes.active
                : undefined
            }
            onClick={onCloseNav}
          >
            بازار حرفه‌ای
          </NavLink>
        </li>
        {!uid && (
          <li className={classes["login-nav-link"]}>
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
    </nav>
  );
};

export default MainNavigation;
