import { useEffect, useState } from "react";

const useDeviceTypeCheck = () => {
  const [screenWidth, setScreenWidth] = useState("");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setScreenWidth(window.innerWidth);
    });
    window.addEventListener("scroll", function () {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
    });
  }, []);

  const isMobile = !!screenWidth
    ? screenWidth <= 600
      ? true
      : false
    : window.innerWidth <= 600
    ? true
    : false;

  const isExtraSmallScreen = !!screenWidth
    ? screenWidth >= 340
      ? true
      : false
    : window.innerWidth >= 340
    ? true
    : false;

  const isDesktop = !!screenWidth
    ? screenWidth <= 1200 && screenWidth >= 900
      ? true
      : false
    : window.innerWidth <= 1200 && window.innerWidth >= 900
    ? true
    : false;

  return { isMobile, isExtraSmallScreen, isDesktop, scrollY, screenWidth };
};

export default useDeviceTypeCheck;
