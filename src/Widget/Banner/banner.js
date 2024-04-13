import { useRef } from "react";
import { useRecoilState } from "recoil";
import { bannerImg } from "../../Recoil/imageAtom";
import useDeviceTypeCheck from "../../Hooks/useDeviceTypeCheck";
import "./banner.scss";

const Banner = ({ banner }) => {
  const imageRef = useRef(null);
  const { isMobile } = useDeviceTypeCheck();
  const [, setIsBannerLoaded] = useRecoilState(bannerImg);

  const desktopImg = banner && banner?.[0]?.content?.[0]?.img?.[0]?.downloadURL;

  const mobileImg =
    banner && banner?.[0]?.content?.[0]?.mobImg?.[0]?.downloadURL;

  const handleImageLoad = () => {
    setIsBannerLoaded(true);
  };

  return (
    <section className="banner_container">
      <div className="banner_wrapper">
        <div className="banner_img_wrapper">
          <img
            src={isMobile ? mobileImg : desktopImg}
            className="banner_single_img"
            alt="banner"
            ref={imageRef}
            onLoad={handleImageLoad}
          />
        </div>
        <div className="banner_text_wrapper">
          <h1 className="banner_text">
            Elevate your space with custom metal furnishings.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
