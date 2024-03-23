import { useNavigate } from "react-router-dom";
import "./backButton.scss";
import { Icon } from "@iconify/react";

const BackButton = ({ title, isDetailPage }) => {
  const navigate = useNavigate();

  return (
    <div className="heading_wrapper">
      <button
        onClick={() => navigate(-1)}
        className={`back_button ${isDetailPage && "back_to_list"}`}
      >
        <Icon className="back_icon" icon="ion:caret-back-circle" />
        {isDetailPage && <p className="title">{title}</p>}
      </button>
      {!isDetailPage && <p className="title">{title.toUpperCase()}</p>}
    </div>
  );
};

export default BackButton;
