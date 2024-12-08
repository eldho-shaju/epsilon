"use client";
import { FullLogo } from "../Header/logo/logo";
import FooterAddress from "./FooterAddress";
import FooterContact from "./FooterContact";
import FooterSocialMedia from "./FooterSocialMedia";
import DevelopedBy from "./DevelopedBy";
import useFooter from "./useFooter";
import useDeviceTypeCheck from "@hooks/useDeviceTypeCheck";
import Link from "@components/Link";

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

  console.log(footerData);

  // if (error) return null;

  return (
    <footer className="w-full mt-auto bg-gray-100">
      {/* <div className="w-[90%] mx-auto border-t-2 border-gray-300"></div> */}
      <div className="container mx-auto py-8 ">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-2">
            <div className="mb-4">
              <img
                loading="lazy"
                src="/assets/images/logoWithText.svg"
                alt="Epsilon"
              />
            </div>
            <div className="pl-4">
              <p className="font-semibold mb-2 text-lg">Explore</p>
              <ul className="list-unstyled">
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
        <div className="flex flex-col md:flex-row justify-evenly mt-4">
          <FooterContact phone={phone} />
          <FooterSocialMedia social={social} />
        </div>
        <div className="w-[90%] mx-auto border-t-2 border-gray-300 mt-8"></div>
        <DevelopedBy />
      </div>
    </footer>
  );
};

export default Footer;
