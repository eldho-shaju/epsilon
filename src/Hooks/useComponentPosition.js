import { useEffect, useRef, useState } from "react";
import useDeviceTypeCheck from "./useDeviceTypeCheck";
import { useSetRecoilState } from "recoil";
import { getPosition } from "../Recoil/imageAtom";

const useComponentPosition = () => {
  const firstComponentRef = useRef(null);
  const { isMobile } = useDeviceTypeCheck();
  const setIsBannerInTop = useSetRecoilState(getPosition);

  useEffect(() => {
    if (firstComponentRef.current && isMobile == false) {
      const topPosition = firstComponentRef.current.getBoundingClientRect().top;
      //   console.log(`Top position of the first component: ${topPosition}`);

      if (topPosition !== 0) {
        // console.log("The first component is not at the top of the window.");
        setIsBannerInTop(false);
      } else {
        // console.log("The first component is at the top of the window.");
        setIsBannerInTop(true);
      }
    }
  }, []);

  return { firstComponentRef };
};

export default useComponentPosition;
