import { memo } from "react";
import { Icon } from "@iconify/react";
import ShareButtons from "../ShareButtons/shareButtons";
import useDeviceTypeCheck from "@/hooks/useDeviceTypeCheck";
import useShare from "@/hooks/useShare";

const ContactButtons = memo((props) => {
  const { name, url } = props;
  const { isDesktop } = useDeviceTypeCheck();
  const { handleShare } = useShare();

  return (
    <div className="flex gap-4 w-full justify-center mt-8 mb-8">
      <>
        {isDesktop ? (
          <div className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 ease-in-out duration-300 text-white font-bold py-2 px-4 rounded w-1/2 justify-center">
            <Icon className="text-xl" icon="ic:sharp-share" />
            Share
            <ShareButtons url={url} title={name} />
          </div>
        ) : (
          <button
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2 justify-center"
            onClick={() => handleShare(name)}
          >
            <Icon icon="ic:sharp-share" />
            Share
          </button>
        )}
        <div className="flex items-center gap-2 bg-green-600 hover:bg-white hover:text-green-600 text-white border border-green-600 ease-in-out duration-300 font-bold py-2 px-4 rounded w-1/2 justify-center">
          <a
            target="_blank"
            className="flex items-center gap-2"
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
