import { memo } from "react";
import { Icon } from "@iconify/react";
import ShareButtons from "../ShareButtons/shareButtons";
import useDeviceTypeCheck from "../../../Hooks/useDeviceTypeCheck";
import useShare from "../../../Hooks/useShare";

const ContactButtons = memo((props) => {
  const { name, url } = props;
  const { isDesktop } = useDeviceTypeCheck();
  const { handleShare } = useShare();

  return (
    <div className="button_wrapper">
      <>
        {isDesktop ? (
          <div className="share_btn">
            <Icon icon="ic:sharp-share" />
            Share
            <ShareButtons url={url} title={name} />
          </div>
        ) : (
          <button className="share_btn" onClick={() => handleShare(name)}>
            <Icon icon="ic:sharp-share" />
            Share
          </button>
        )}
        <div className="enquire_btn">
          <a
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=919605523721&text=Hi, checkout the product link ${url}`}
          >
            <Icon icon="akar-icons:whatsapp-fill" /> Enquire Now
          </a>
        </div>
      </>
    </div>
  );
});

export default ContactButtons;
