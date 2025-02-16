import { getFirebaseData } from "@/utils/getFirebaseData";
import DesktopHeader from "./DesktopHeader";

const Header = async () => {
  const { data } = await getFirebaseData({ collectionName: "header" });

  return (
    <header className="fixed top-0 bg-white shadow w-full flex items-center h-mobileheader sm:h-header z-50">
      <DesktopHeader navMenu={data} />
    </header>
  );
};
export default Header;
