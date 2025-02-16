import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  WhatsappIcon,
  FacebookIcon,
  TelegramIcon,
} from "next-share";

const ShareButtons = ({ url, title }) => {
  return (
    <div className="flex gap-4 bg-white px-2 py-1 rounded ml-2">
      <FacebookShareButton url={url} title={title}>
        <FacebookIcon
          size={30}
          className="prose rounded lg:hover:scale-110 ease-in-out duration-300"
        />
      </FacebookShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon
          size={30}
          className="prose rounded  lg:hover:scale-110 ease-in-out duration-300"
        />
      </WhatsappShareButton>
      <TelegramShareButton url={url} title={title}>
        <TelegramIcon
          size={30}
          className="prose rounded  lg:hover:scale-110 ease-in-out duration-300"
        />
      </TelegramShareButton>
    </div>
  );
};

export default ShareButtons;
