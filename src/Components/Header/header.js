import MobileHeader from "./MobileHeader";
import useDeviceTypeCheck from "../../Hooks/useDeviceTypeCheck";
import useHeader from "./useHeader";
import "./header.scss";
import DesktopHeader from "./DesktopHeader";

export const AppBarHieght = "74px";

const Header = () => {
  const { isMobile } = useDeviceTypeCheck();
  const { data, loading, isHome } = useHeader(isMobile);

  if (loading) return null;

  return (
    <header id="navbar" className={`navbar ${isHome}`}>
      <div className="toolbar">
        {isMobile ? (
          <MobileHeader navMenu={data} />
        ) : (
          <DesktopHeader navMenu={data} />
        )}
      </div>
    </header>
  );
};
export default Header;
