import { useEffect, useState } from "react";

const useDeviceTypeCheck = () => {
  const [screenWidth, setScreenWidth] = useState("");

  useEffect(() => {
    window.addEventListener("resize", function () {
      if (typeof window !== "undefined") setScreenWidth(window.innerWidth);
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

  // window.innerWidth <= 600 || screenWidth <= 600 ? true : false;
  // const isTablet = screenWidth <= 900 || screenWidth > 600;
  // const isDesktop = screenWidth > 600;
  return { isMobile, isExtraSmallScreen, isDesktop };
};

export default useDeviceTypeCheck;
