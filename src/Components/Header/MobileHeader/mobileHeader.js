import { Link } from "react-router-dom";
import useToggle from "../../../Hooks/useToggle";
import { Icon } from "@iconify/react";
// import "../header.scss";
import OffCanvasMenu from "./OffCanvasMenu";
import logo from "../logo.svg";
import "./mobileHeader.scss";

const MobileHeader = ({ navMenu, handleScrollPosition }) => {
  const { toggle, state, handleClose } = useToggle();

  const handleHomeRoute = () => handleClose();

  return (
    <>
      <div className="mobile_header">
        <div className="logo-wrapper">
          <Link to={"/"} onClick={handleHomeRoute}>
            <img className="logo" alt="logo" src={logo} />
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
