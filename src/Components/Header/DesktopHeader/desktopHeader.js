"use client";
import { usePathname } from "next/navigation";
import DesktopMenu from "./DesktopMenu";
import Link from "@/components/Link";
import InnerPageHeader from "./InnerPageHeader";

const DesktopHeader = (props) => {
  const { navMenu } = props;
  const pathname = usePathname();

  return (
    <>
      <div
        className={`${
          pathname !== "/" ? "hidden md:flex" : ""
        } lg:container mx-mobile_margin lg:mx-auto w-full flex justify-between items-center`}
      >
        <Link href="/">
          <img
            src="/assets/images/logoWithText.svg"
            alt="Epsilon"
            className="w-[130px] sm:w-[150px] md:w-[180px]"
          />
        </Link>
        <DesktopMenu navMenu={navMenu} />
      </div>
      <InnerPageHeader navMenu={navMenu} />
    </>
  );
};

export default DesktopHeader;
