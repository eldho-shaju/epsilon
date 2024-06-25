import { useEffect, useState } from "react";

const useDeviceTypeCheck = () => {
  const [screenWidth, setScreenWidth] = useState("");

  useEffect(() => {
    window.addEventListener("resize", function () {
      setScreenWidth(window.innerWidth);
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
    ? screenWidth >= 900
      ? true
      : false
    : window.innerWidth >= 900
    ? true
    : false;

  return { isMobile, isExtraSmallScreen, isDesktop, screenWidth };
};

export default useDeviceTypeCheck;
