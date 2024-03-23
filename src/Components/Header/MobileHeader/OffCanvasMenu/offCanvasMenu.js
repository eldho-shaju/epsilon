import Offcanvas from "react-bootstrap/Offcanvas";
import { useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../../header.scss";

const OffCanvasMenu = (props) => {
  const { state, toggle, navMenu, handleScrollPosition } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const handleRoute = (path) => {
    navigate(path);
    handleScrollPosition();
    toggle();
  };

  return (
    <Offcanvas show={state} onHide={toggle} placement="end">
      <Offcanvas.Body>
        <ul>
          {navMenu?.map((text) => {
            const activeTab =
              location.pathname === text.link ? "active-tab" : "";
            return (
              <li key={text?.id}>
                <button
                  onClick={() => handleRoute(text?.link)}
                  className={`nav_menu ${activeTab}`}
                >
                  <Icon icon={text?.icon} width="26" height="26" />
                  <span>{text?.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffCanvasMenu;
