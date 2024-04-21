import { useRef } from "react";
import { Link } from "react-router-dom";
import useComponentPosition from "../../Hooks/useComponentPosition";
import "./banner.scss";
import Shimmer from "./Shimmer/shimmer";

const Banner = (props) => {
  const { banner, loading } = props;
  const imageRef = useRef(null);
  const { firstComponentRef } = useComponentPosition();

  const desktopImg = banner && banner?.bannerImg?.[0]?.downloadURL;

  // if (loading) return <Shimmer />;

  return (
    <section ref={firstComponentRef} className="banner_container">
      <div className="banner_wrapper">
        <Link className="banner_link" to="/product-type">
          <div className="banner_img_wrapper">
            <link rel="preload" as="image" href="asset/banner/banner.jpg" />
            <img
              src={loading ? "asset/banner/banner.jpg" : desktopImg}
              className="banner_single_img"
              alt="banner"
              ref={imageRef}
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
