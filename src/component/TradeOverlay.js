import React, { useRef, useState, useEffect } from "react";
import classes from "./TradeOverlay.module.css";
import { Link } from "react-router-dom";

const TradeOverlay = ({ symbol, onClickOnBG, className }) => {
  const ovrelayRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ovrelayRef.current && !ovrelayRef.current.contains(event.target)) {
        onClickOnBG(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOnBG]);

  return (
    <div
      className={`${classes["overlay-list"]} ${classes[className]}`}
      ref={ovrelayRef}
    >
      <ul>
        <li>
          <Link to={`/coins/${symbol.toUpperCase()}USDT`}>معامله</Link>
        </li>
        <li>
          <Link>اطلاعات بیشتر</Link>
        </li>
      </ul>
    </div>
  );
};

export default TradeOverlay;
