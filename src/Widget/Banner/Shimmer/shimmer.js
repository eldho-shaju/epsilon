import "./shimmer.scss";

const Shimmer = () => {
  return (
    <section className="banner_container">
      <div className="banner_wrapper">
        <div className="banner_link" to="/product-type">
          <div className="banner_img_wrapper">
            {/* <img
              src={"asset/banner/banner.jpg"}
              className="banner_single_img"
              alt="banner"
            /> */}
            <div className="banner_shimmer"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shimmer;
