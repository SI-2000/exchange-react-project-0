import { useEffect, useState } from "react";

export function useBreakPoint() {
  const [breakPoint, setBreakPoint] = useState("");
  const handleResize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 640) {
      setBreakPoint("sm");
    } else if (windowWidth <= 768) {
      setBreakPoint("md");
    } else if (windowWidth <= 1024) {
      setBreakPoint("lg");
    } else if (windowWidth <= 1280) {
      setBreakPoint("xl");
    } else if (windowWidth <= 1536) {
      setBreakPoint("2xl");
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return breakPoint;
}
