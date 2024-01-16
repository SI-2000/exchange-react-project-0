import React, { useEffect, useRef, useState } from "react";

import classes from "./HorizontalScrollComponent.module.css";

const HorizontalScrollComponent = ({ children }) => {
  const componentRef = useRef();
  const containerRef = useRef();
  const wrapperRef = useRef();

  const [fromLeft, setFromLeft] = useState(0);

  let componentHeight;
  if (wrapperRef.current) {
    /* The whole component scrolls vertically while its content scrolls horizontally,
      but their scrolling speed is equal. Because the width of the screen
      is greater than its height, at the end, the horizontally scrolled amount
      is greater than the vertical scroll,
      as much as the difference between the width and height of the screen,
      which appears as an empty space. Therefore we subtract that value
      from the total height of the component. */
    componentHeight =
      wrapperRef.current.scrollWidth - (window.innerWidth - window.innerHeight);
  }

  useEffect(() => {
    const scrollHandler = () => {
      const componentFromTop = componentRef.current.getBoundingClientRect().top;
      const containerFromTop = containerRef.current.getBoundingClientRect().top;
      const containerFromComp = componentFromTop - containerFromTop;
      setFromLeft(containerFromComp);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div
      className={`${classes["HorizontalScrollComponent"]}`}
      style={{ height: componentHeight + "px" }}
      ref={componentRef}
    >
      <div className={`${classes["container"]}`} ref={containerRef}>
        <div
          style={{ left: fromLeft + "px" }}
          className={`${classes["slides-wrapper"]}`}
          ref={wrapperRef}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollComponent;
