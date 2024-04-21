import { Link, useLocation } from "react-router-dom";
import useScrollToTop from "../../../../Hooks/useScrollToTop";
import Shimmer from "./Shimmer/shimmer";

const DesktopMenu = (props) => {
  const { navMenu, loading } = props;
  const location = useLocation();
  const { handleScrollPosition } = useScrollToTop();

  if (loading) return <Shimmer />;

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
