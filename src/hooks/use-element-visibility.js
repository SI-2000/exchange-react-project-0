import { useEffect, useState } from "react";

const defaultConfig = {
  percentFromWindowTop: 1,
  selectedLevel: 0,
};

const useElementVisibility = (ref, config = defaultConfig) => {
  const [distanceFromTop, setDistanceFromTop] = useState(
    window.innerHeight * 2
  );
  const [isSeen, setIsSeen] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const elementHeight = ref.current ? ref.current.scrollHeight : 0;

  useEffect(() => {
    const scrollHandler = () => {
      setDistanceFromTop(
        ref.current.getBoundingClientRect().top +
          elementHeight * config.selectedLevel
      );
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    setIsSeen((prev) => {
      return !prev
        ? distanceFromTop <= window.innerHeight * config.percentFromWindowTop
        : true;
    });
    setIsInView(
      ref.current.getBoundingClientRect().top - elementHeight <= 0 &&
        ref.current.getBoundingClientRect().bottom >= 0
    );
  }, [distanceFromTop]);

  return { isSeen, isInView };
};

export default useElementVisibility;
