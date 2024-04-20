import { Link, useLocation } from "react-router-dom";
import useScrollToTop from "../../../../Hooks/useScrollToTop";

const DesktopMenu = ({ navMenu }) => {
  const location = useLocation();
  const { handleScrollPosition } = useScrollToTop();

  return (
    <div className="nav_menu_wrapper">
      {navMenu &&
        navMenu?.length > 0 &&
        navMenu?.map((menu) => {
          const currentPath =
            location.pathname.includes(menu?.label.toLowerCase()) ||
            location.pathname === menu?.link;
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
  );
};

export default DesktopMenu;
