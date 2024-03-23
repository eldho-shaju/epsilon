import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  WhatsappIcon,
  FacebookIcon,
  TelegramIcon,
} from "react-share";

const ShareButtons = ({ url, title }) => {
  return (
    <div className="social_icon_container">
      <FacebookShareButton url={url} title={title}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={32} round={true} />
      </TelegramShareButton>
    </div>
  );
};

export default ShareButtons;
