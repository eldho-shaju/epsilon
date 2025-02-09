import { memo } from "react";
import { Icon } from "@iconify/react";
import ShareButtons from "../ShareButtons/shareButtons";
import useDeviceTypeCheck from "@/customHooks/useDeviceTypeCheck";
import useShare from "@/customHooks/useShare";

const ContactButtons = memo((props) => {
  const { name, url } = props;
  const { isDesktop } = useDeviceTypeCheck();
  const { handleShare } = useShare();

  return (
    <div className="flex gap-2 lg:gap-4 w-full justify-center mt-4 mb-4 md:mb-8 md:mt-8">
      <>
        {isDesktop ? (
          <div className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 ease-in-out duration-300 text-white font-bold py-2 px-4 rounded w-1/2 justify-center">
            <Icon className="text-xl" icon="ic:sharp-share" />
            Share
            <ShareButtons url={url} title={name} />
          </div>
        ) : (
          <button
            className="flex items-center gap-1 bg-blue-600 text-white text-sm h-fit py-2 px-0 md:py-2 md:px-4 rounded w-1/2 justify-center"
            onClick={() => handleShare(name)}
          >
            <Icon icon="ic:sharp-share" className="text-md" />
            Share
          </button>
        )}
        <div className="flex items-center gap-1 bg-green-600 text-sm h-fit lg:h-auto lg:font-bold text-white py-2 px-0 md:py-2 md:px-4 rounded w-1/2 justify-center lg:hover:bg-green-700 ease-in-out duration-300">
          <a
            target="_blank"
            className="flex items-center gap-2"
            href={`https://api.whatsapp.com/send?phone=919605523721&text=Hi, checkout the product link ${url}`}
          >
            <Icon
              icon="akar-icons:whatsapp-fill"
              className="text-md lg:text-xl"
            />
            WhatsApp
          </a>
        </div>
      </>
    </div>
  );
});

export default ContactButtons;
