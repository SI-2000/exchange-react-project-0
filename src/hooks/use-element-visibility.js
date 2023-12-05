import { useEffect, useState } from "react";

const defaultConfig = {
  visibilityThreshold: 1,
  depthLevel: 0,
};

const useVisibilityStatus = (elementRef, config = defaultConfig) => {
  const [distanceFromTop, setDistanceFromTop] = useState(
    window.innerHeight * 2
  );
  const [seen, setSeen] = useState(false);
  const [inView, setInView] = useState(false);

  const elementHeight = elementRef.current
    ? elementRef.current.scrollHeight
    : 0;

  useEffect(() => {
    const scrollHandler = () => {
      setDistanceFromTop(
        elementRef.current.getBoundingClientRect().top +
          elementHeight * config.depthLevel
      );
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    setSeen((prev) => {
      return !prev
        ? distanceFromTop <= window.innerHeight * config.visibilityThreshold
        : true;
    });
    setInView(
      elementRef.current.getBoundingClientRect().top - elementHeight <= 0 &&
        elementRef.current.getBoundingClientRect().bottom >= 0
    );
  }, [distanceFromTop]);

  return { seen, inView };
};

export default useVisibilityStatus;
