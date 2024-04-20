import { useRef } from "react";
import { useRecoilState } from "recoil";
import { bannerImg } from "../../Recoil/imageAtom";
import "./banner.scss";
import { Link } from "react-router-dom";

const Banner = (props) => {
  const { banner } = props;
  const imageRef = useRef(null);
  const [isBannerLoaded, setIsBannerLoaded] = useRecoilState(bannerImg);

  const desktopImg = banner && banner?.bannerImg?.[0]?.downloadURL;

  const handleImageLoad = () => {
    setIsBannerLoaded(true);
  };

  return (
    <section className="banner_container">
      <div className="banner_wrapper">
        <Link className="banner_link" to="/product-type">
          <div className="banner_img_wrapper">
            <img
              src={desktopImg}
              className="banner_single_img"
              alt="banner"
              ref={imageRef}
              onLoad={handleImageLoad}
            />
            {isBannerLoaded === false && (
              <img
                src={"asset/banner/banner.jpg"}
                className="banner_single_img"
                alt="banner"
              />
            )}
          </div>
          <div className="banner_text_wrapper">
            <p className="banner_text">{banner?.text}</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
