import useDeviceTypeCheck from "../../Hooks/useDeviceTypeCheck";
import "./banner.scss";

const Banner = ({ banner }) => {
  const { isMobile } = useDeviceTypeCheck();

  const desktopImg = banner && banner?.[0]?.content?.[0]?.img?.[0]?.downloadURL;

  const mobileImg =
    banner && banner?.[0]?.content?.[0]?.mobImg?.[0]?.downloadURL;

  return (
    <section className="banner_container">
      <div className="banner_wrapper">
        <div className="banner_img_wrapper">
          <img
            src={isMobile ? mobileImg : desktopImg}
            className="banner_single_img"
            alt="banner"
          />
        </div>
        <div className="banner_text_wrapper">
          <h1 className="banner_text">
            Elevate your space with custom metal furnishings.
            {/* <br /> */}
            {/* <span>Custom Metal Furnishings!</span> */}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
