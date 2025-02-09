"use client";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "@/components/Link";
import { Logo } from "@/components/Header/Logo/logo";
import { formatText } from "@/utils/formatText";
import MobileMenu from "../../MobileMenu";

const InnerPageHeader = ({ navMenu }) => {
  const router = useRouter();
  const pathname = usePathname();

  const split = pathname?.split("/") || [];
  const name =
    split && split?.length > 0 ? split?.pop() : pathname ? pathname : "";
  const title = name && formatText(name, true);

  return (
    <div
      className={`${
        pathname === "/" ? "hidden" : "md:hidden"
      } inline-flex items-center w-full gap-2 p-mobile_margin justify-between`}
    >
      <div className="flex items-center gap-2">
        <button className="" onClick={() => router.back()}>
          <Icon
            className="back_icon"
            icon="material-symbols:arrow-back-ios-new-rounded"
          />
        </button>
        <Link href="/">
          <Logo />
        </Link>
        {title && <div className="text-md font-semibold ml-1">{title}</div>}
      </div>
      <MobileMenu navMenu={navMenu} />
    </div>
  );
};

export default InnerPageHeader;
