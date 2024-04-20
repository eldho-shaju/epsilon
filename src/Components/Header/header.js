import DesktopHeader from "./DesktopHeader";
import useDeviceTypeCheck from "../../Hooks/useDeviceTypeCheck";
import useHeader from "./useHeader";
import "./header.scss";

const Header = () => {
  const { isMobile } = useDeviceTypeCheck();
  const { data, loading, isHome } = useHeader(isMobile);

  if (loading) return null;

  return (
    <header id="navbar" className={`navbar ${isMobile ? "" : isHome}`}>
      <div className="toolbar">
        <DesktopHeader navMenu={data} isHome={isHome} />
      </div>
    </header>
  );
};
export default Header;
