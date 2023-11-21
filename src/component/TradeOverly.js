import React, { useRef, useState, useEffect } from "react";
import classes from "./TradeOverly.module.css";
import { Link } from "react-router-dom";

const TradeOverly = ({ onClickOnBG, className }) => {
  const overlyRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlyRef.current && !overlyRef.current.contains(event.target)) {
        onClickOnBG(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOnBG]);

  return (
    <div className={`${classes["overly-list"]} ${classes[className]}`} ref={overlyRef}>
      <ul>
        <li>
          <Link>معامله</Link>
        </li>
        <li>
          <Link>اطلاعات بیشتر</Link>
        </li>
      </ul>
    </div>
  );
};

export default TradeOverly;
