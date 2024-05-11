import { Link, useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { formatText } from "../../../../functions/formatText";
import { Logo } from "../../logo/logo";

const MobileHeaderTitle = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const split = location?.pathname?.split("/") || [];
  const name =
    split && split?.length > 0
      ? split?.pop()
      : !!location?.pathname
      ? location.pathname
      : "";
  const title = name && formatText(name);

  return (
    <div className="back_button_wrapper">
      <button className="back_button" onClick={() => navigate(-1)}>
        <Icon
          className="back_icon"
          icon="material-symbols:arrow-back-ios-new-rounded"
        />
      </button>
      <Link to="/">
        <Logo />
      </Link>
      {title && <div className="title">{title}</div>}
    </div>
  );
};

export default MobileHeaderTitle;
