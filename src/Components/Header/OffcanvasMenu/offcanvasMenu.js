import { usePathname, useRouter } from "next/navigation";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Icon } from "@iconify/react";
import "./offcanvas.scss";

const OffCanvasMenu = (props) => {
  const { state, toggle, navMenu, handleScrollPosition } = props;
  const router = useRouter();
  const pathname = usePathname();

  const handleRoute = (path) => {
    router.push(path);
    handleScrollPosition();
    toggle();
  };

  return (
    <Offcanvas
      show={state}
      onHide={toggle}
      placement="end"
      className="custom-offcanvas"
    >
      <Offcanvas.Body className="custom-body">
        <ul>
          {navMenu?.map((text) => {
            const activeTab = pathname === text.link ? "active-tab" : "";
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
