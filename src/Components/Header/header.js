import { getFirebaseData } from "@utils/getFirebaseData";
import DesktopHeader from "./DesktopHeader/desktopHeader";

const Header = async () => {
  const data = await getFirebaseData("header");

  return (
    <header className="w-full flex items-center h-header z-50 fixed bg-white shadow">
      <DesktopHeader navMenu={data} />
    </header>
  );
};
export default Header;
