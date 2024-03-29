import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import OffCanvasMenu from "./OffCanvasMenu";
import LogoSvgWhite from "../logo/logoSvgWhite";
import useToggle from "../../../Hooks/useToggle";
import useScrollToTop from "../../../Hooks/useScrollToTop";
import "./mobileHeader.scss";

const MobileHeader = (props) => {
  const { navMenu } = props;
  const { toggle, state, handleClose } = useToggle();
  const { handleScrollPosition } = useScrollToTop();

  const handleHomeRoute = () => {
    handleClose();
    handleScrollPosition();
  };

  return (
    <>
      <div className="mobile_header">
        <div className="logo_wrapper">
          <Link to={"/"} onClick={handleHomeRoute} className="link_wrapper">
            <LogoSvgWhite />
          </Link>
        </div>
        <div className="nav_menu_wrapper">
          <button className="hamburger_menu_button" onClick={toggle}>
            {state ? (
              <Icon className="icon" icon="line-md:close" />
            ) : (
              <Icon className="icon" icon="ep:menu" />
            )}
          </button>
        </div>
      </div>
      <OffCanvasMenu
        state={state}
        toggle={toggle}
        navMenu={navMenu}
        handleScrollPosition={handleScrollPosition}
      />
    </>
  );
};

export default MobileHeader;
