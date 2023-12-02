import { useEffect, useState } from "react";

const useElementVisibility = (ref) => {
  const [distanceFromTop, setDistanceFromTop] = useState(
    window.innerHeight * 2
  );
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setDistanceFromTop(ref.current.getBoundingClientRect().top);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    setIsInView((prev) => {
      return !prev ? distanceFromTop <= window.innerHeight  : true;
    });
  }, [distanceFromTop]);

  return isInView;
};

export default useElementVisibility;
