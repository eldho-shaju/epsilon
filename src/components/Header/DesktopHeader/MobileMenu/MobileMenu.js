import { Icon } from "@iconify/react/dist/iconify.js";

const MobileMenu = (props) => {
  const { state, toggle } = props;
  return (
    <div className="nav_menu_wrapper">
      <button className="hamburger_menu_button" onClick={toggle}>
        {state ? (
          <Icon className="icon" icon="line-md:close" />
        ) : (
          <Icon className="icon" icon="ep:menu" />
        )}
      </button>
    </div>
  );
};

export default MobileMenu;
