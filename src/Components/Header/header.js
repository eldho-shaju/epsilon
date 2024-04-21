import { useRecoilValue } from "recoil";
import { bannerImg, getPosition } from "../../Recoil/imageAtom";
import DesktopHeader from "./DesktopHeader";
import useDeviceTypeCheck from "../../Hooks/useDeviceTypeCheck";
import useHeader from "./useHeader";
import "./header.scss";

const Header = () => {
  const { isMobile } = useDeviceTypeCheck();
  const { data, loading, isHome } = useHeader(isMobile);
  const isBannerLoaded = useRecoilValue(bannerImg);
  const isBannerInTop = useRecoilValue(getPosition);

  const home =
    isMobile === false && isBannerLoaded && isBannerInTop ? isHome : "";

  return (
    <header id="navbar" className={`navbar ${home}`}>
      <div className="toolbar">
        <DesktopHeader navMenu={data} isHome={isHome} loading={loading} />
      </div>
    </header>
  );
};
export default Header;
