import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

const BackButton = ({ title, isDetailPage }) => {
  const router = useRouter();

  return (
    <div className="heading_wrapper">
      <button
        onClick={() => router.back()}
        className={`back_button ${isDetailPage ? "back_to_list" : ""}`}
      >
        <Icon className="back_icon" icon="ion:caret-back-circle" />
        {isDetailPage && <p className="title">{title}</p>}
      </button>
      {!isDetailPage && <p className="title">{title.toUpperCase()}</p>}
    </div>
  );
};

export default BackButton;
