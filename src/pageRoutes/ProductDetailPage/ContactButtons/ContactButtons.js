import { useEffect, useState, memo } from "react";
import { Icon } from "@iconify/react";
import useDeviceTypeCheck from "@/customHooks/useDeviceTypeCheck";
import useShare from "@/customHooks/useShare";
import ShareButtons from "../ShareButtons";

const ContactButtons = memo((props) => {
  const { name } = props;
  const { isDesktop } = useDeviceTypeCheck();
  const { handleShare } = useShare();
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <div className="flex gap-2 lg:gap-4 w-full justify-center mt-4 mb-4 md:mb-8 md:mt-8 flex-col lg:flex-row">
      <>
        {isDesktop ? (
          <div className="flex items-center gap-2 bg-blue-600 lg:hover:bg-blue-700 ease-in-out duration-300 text-white font-semibold py-2 px-4 w-1/2 justify-center text-md">
            <Icon className="text-xl" icon="ic:sharp-share" />
            Share
            <ShareButtons url={url} title={name} />
          </div>
        ) : (
          <button
            className="flex items-center gap-1 bg-blue-600 text-white text-md h-fit py-2 px-0 md:py-2 md:px-4 lg:w-1/2 justify-center w-full"
            onClick={() => handleShare(name)}
          >
            <Icon icon="ic:sharp-share" className="text-md" />
            Share
          </button>
        )}
        <div className="flex items-center gap-1 bg-green-600 text-md h-fit lg:h-auto lg:font-semibold text-white py-2 px-0 md:py-2 md:px-4 w-full lg:w-1/2 justify-center lg:hover:bg-green-700 ease-in-out duration-300">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            href={`https://api.whatsapp.com/send?phone=919605523721&text=Hello, I'm interested in this product: ${url}. Could you please share the price and availability?`}
          >
            <Icon
              icon="akar-icons:whatsapp-fill"
              className="text-md lg:text-xl"
            />
            Order on WhatsApp
          </a>
        </div>
      </>
    </div>
  );
});

ContactButtons.displayName = "ContactButtons";

export default ContactButtons;
