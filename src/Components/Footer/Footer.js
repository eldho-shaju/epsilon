"use client";
import FooterAddress from "./FooterAddress";
import FooterContact from "./FooterContact";
import FooterSocialMedia from "./FooterSocialMedia";
import DevelopedBy from "./DevelopedBy";
import useFooter from "./useFooter";
import Link from "@/components/Link";
import useDeviceTypeCheck from "@/hooks/useDeviceTypeCheck";

const Footer = () => {
  const { footerData } = useFooter();
  const { isMobile } = useDeviceTypeCheck();

  const phone =
    footerData?.length > 0 && footerData?.find((item) => item?.id === "phone");

  const address =
    footerData?.length > 0 &&
    footerData?.find((item) => item?.id === "address");

  const social =
    footerData?.length > 0 && footerData?.find((item) => item?.id === "social");

  const pages =
    footerData?.length > 0 &&
    footerData?.find((item) => item?.id === "header")?.header;

  if (!footerData || footerData?.length === 0) return null;

  return (
    <footer className="w-full flex mt-auto bg-natural_gray">
      {/* <div className="w-[90%] mx-auto border-t-2 border-gray-300"></div> */}
      <div className="md:container mx-mobile_margin md:mx-auto py-4 md:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="flex flex-col gap-2 items-center md:items-start pb-4 md:pb-0">
            {/* {!isMobile && ( */}
            <div className="mb-4">
              <img
                loading="lazy"
                src="/assets/images/logoWithText.svg"
                alt="Epsilon"
                className="w-[130px] sm:w-[150px] md:w-[180px]"
              />
            </div>
            {/* )} */}
            <div className="pl-4">
              {!isMobile && (
                <p className="font-semibold mb-2 text-lg">Explore</p>
              )}
              <ul className="list-unstyled text-center md:text-left">
                {pages?.length > 0 &&
                  pages?.map((menu) => {
                    if (menu?.id === "home") return;
                    return (
                      <li key={menu?.id}>
                        <Link
                          href={menu?.link}
                          className={`inline-flex py-2 text-slate-950 hover:text-red-500 [&.active]:bg-red-100 text-sm`}
                        >
                          {menu?.label}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <FooterAddress address={address} />
        </div>
        <div className="w-[90%] mx-auto border-t-2 border-gray-300 mt-8"></div>
        <div className="flex flex-col md:flex-row justify-evenly mt-4 gap-4 md:gap-0">
          <FooterContact phone={phone} />
          <FooterSocialMedia social={social} />
        </div>
        {/* <div className="w-[90%] mx-auto border-t-2 border-gray-300 mt-8"></div> */}
        {/* <DevelopedBy /> */}
      </div>
    </footer>
  );
};

export default Footer;
