import { Link } from "react-router-dom";
import { FullLogo } from "../logo/logo";
import MobileHeaderTitle from "./MobileHeaderTitle";
import OffcanvasMenu from "../OffcanvasMenu";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import useToggle from "../../../Hooks/useToggle";
import useScrollToTop from "../../../Hooks/useScrollToTop";
import useDeviceTypeCheck from "../../../Hooks/useDeviceTypeCheck";
import "./desktopHeader.scss";

const DesktopHeader = (props) => {
  const { navMenu, isHome, loading } = props;
  const { isMobile } = useDeviceTypeCheck();
  const { handleScrollPosition } = useScrollToTop();
  const { toggle, state, handleClose } = useToggle();

  const handleHomeRoute = () => {
    handleScrollPosition();
    if (isMobile) handleClose();
  };

  return (
    <>
      <div className="desktop_header_wrapper">
        {isMobile && !isHome ? (
          <MobileHeaderTitle />
        ) : (
          <div className="logo_wrapper">
            <Link to="/" className="home_link" onClick={handleHomeRoute}>
              <FullLogo />
            </Link>
          </div>
        )}
        {isMobile ? (
          <MobileMenu state={state} toggle={toggle} />
        ) : (
          <DesktopMenu navMenu={navMenu} loading={loading} />
        )}
      </div>
      <OffcanvasMenu
        state={state}
        toggle={toggle}
        navMenu={navMenu}
        handleScrollPosition={handleScrollPosition}
      />
    </>
  );
};

export default DesktopHeader;
