import DesktopMenu from "./DesktopMenu";
import Link from "@/components/Link";

const DesktopHeader = (props) => {
  const { navMenu } = props;

  return (
    <div className="md:container mx-mobile_margin md:mx-auto w-full flex justify-between items-center">
      <Link href="/">
        <img
          src="/assets/images/logoWithText.svg"
          alt="Epsilon"
          className="w-[130px] sm:w-[150px] md:w-[180px]"
        />
      </Link>
      <DesktopMenu navMenu={navMenu} />
    </div>
  );
};

export default DesktopHeader;
