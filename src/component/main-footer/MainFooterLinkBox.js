import React, { useEffect, useRef, useState } from "react";

import classes from "./MainFooterLinkBox.module.css";

const MainFooterLinkBox = ({ title, links }) => {
  const [panelIsOpen, setPanelIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const panelRef = useRef(null);

  const boxToggleHandler = () => {
    setPanelIsOpen((prev) => {
      return !prev;
    });
    setHeight(panelRef.current.scrollHeight);
  };

  return (
    <div className={`${classes["MainFooterLinkBox"]}`}>
      <div
        onClick={boxToggleHandler}
        className={`${classes["btn"]} ${panelIsOpen && classes["active"]}`}
      >
        <h1>{title}</h1>
      </div>

      <div
        className={`${classes["links-panel"]}`}
        style={{ height: panelIsOpen ? `${height}px` : `0px` }}
        ref={panelRef}
      >
        {links.map((link, index) => {
          return (
            <a key={index} href="#">
              {link}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MainFooterLinkBox;
