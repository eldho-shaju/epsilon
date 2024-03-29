import { Link, useLocation } from "react-router-dom";
import LogoSvgWhite from "../logo/logoSvgWhite";
import useScrollToTop from "../../../Hooks/useScrollToTop";
import "./desktopHeader.scss";

const DesktopHeader = (props) => {
  const { navMenu } = props;
  const { handleScrollPosition } = useScrollToTop();
  const location = useLocation();

  return (
    <div className="desktop_header_wrapper">
      <div className="logo_wrapper">
        <Link to="/" className="home_link" onClick={handleScrollPosition}>
          {/* <img className="logo" alt="logo" src={logo} /> */}
          <LogoSvgWhite />
        </Link>
      </div>
      <div className="nav_menu_wrapper">
        {navMenu &&
          navMenu?.length > 0 &&
          navMenu?.map((menu) => {
            const currentPath =
              location.pathname.includes(menu?.label.toLowerCase()) ||
              location.pathname === menu.link;
            const activeTab = currentPath ? "active-page" : "";
            return (
              <Link
                to={menu?.link}
                key={menu?.id}
                onClick={handleScrollPosition}
                className={`nav_links ${activeTab}`}
              >
                <span className={`link-text ${activeTab}`}>{menu?.label}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default DesktopHeader;
