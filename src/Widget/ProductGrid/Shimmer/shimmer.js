import { Icon } from "@iconify/react/dist/iconify.js";

const Shimmer = () => {
  return (
    <div className="product_grid_wrapper">
      <div className="product_container">
        <p className="title">Our collections</p>
        <div className="item_container">
          {[...Array(4)]?.map((val, index) => (
            <div className="items_wrapper" key={index}>
              <div className="item_wrapper_link">
                <div className={`productItem_wrapper`}>
                  <div className="img_wrapper">
                    <div className="product_img"></div>
                  </div>
                  <div className="text_wrapper_shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="view_all_wrapper">
        <div className="view_all_button">
          <div className="link_shimmer">
            View All
            <Icon icon="mdi:arrow-left-thin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
