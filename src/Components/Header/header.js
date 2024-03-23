import MobileHeader from "./MobileHeader";
import useDeviceTypeCheck from "../../Hooks/useDeviceTypeCheck";
import useHeader from "./useHeader";
import "./header.scss";
import DesktopHeader from "./DesktopHeader";
import { useLocation } from "react-router-dom";
// import useBackgroundColor from "../../Hooks/useBackgroundColor";

export const AppBarHieght = "74px";

const Header = () => {
  const { isMobile } = useDeviceTypeCheck();
  const location = useLocation();
  // const isDarkBackground = useBackgroundColor();
  const isHome = location?.pathname === "/" ? "home" : "";
  const { data } = useHeader(isMobile, isHome);
  const handleScrollPosition = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header id="navbar" className={`navbar ${isHome}`}>
      <div className="toolbar">
        {isMobile ? (
          <MobileHeader
            navMenu={data}
            handleScrollPosition={handleScrollPosition}
          />
        ) : (
          <DesktopHeader
            navMenu={data}
            handleScrollPosition={handleScrollPosition}
          />
        )}
      </div>
    </header>
  );
};
export default Header;
