import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import useHeader from "./useHeader";
import useDeviceTypeCheck from "../../Hooks/useDeviceTypeCheck";
import "./header.scss";

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
