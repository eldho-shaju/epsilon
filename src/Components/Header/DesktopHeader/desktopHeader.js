import DesktopMenu from "./DesktopMenu";
import Link from "@/components/Link";

const DesktopHeader = (props) => {
  const { navMenu } = props;

  return (
    <div className="container mx-auto w-full flex justify-between items-center">
      <div className="">
        <Link href="/">
          <img src="/assets/images/logoWithText.svg" alt="Epsilon" />
        </Link>
      </div>
      <DesktopMenu navMenu={navMenu} />
    </div>
  );
};

export default DesktopHeader;
