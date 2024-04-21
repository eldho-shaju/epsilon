import { useRef } from "react";
import { Link } from "react-router-dom";
import useComponentPosition from "../../Hooks/useComponentPosition";
import useDeviceTypeCheck from "../../Hooks/useDeviceTypeCheck";
import "./banner.scss";

const Banner = (props) => {
  const { banner, loading } = props;
  const imageRef = useRef(null);
  const { firstComponentRef } = useComponentPosition();
  const { isMobile } = useDeviceTypeCheck();

  const desktopImg = banner && banner?.bannerImg?.[0]?.downloadURL;

  const handleImageLoad = () => {
    if (isMobile === false) setIsBannerLoaded(true);
  };

  return (
    <section ref={firstComponentRef} className="banner_container">
      <div className="banner_wrapper">
        <Link className="banner_link" to="/product-type">
          <div className="banner_img_wrapper">
            <img
              src={loading ? "asset/banner/banner.jpg" : desktopImg}
              className="banner_single_img"
              alt="banner"
              ref={imageRef}
              onLoad={handleImageLoad}
            />
          </div>
          {banner?.text && (
            <div className="banner_text_wrapper">
              <p className="banner_text">{banner?.text}</p>
            </div>
          )}
        </Link>
      </div>
    </section>
  );
};

export default Banner;
