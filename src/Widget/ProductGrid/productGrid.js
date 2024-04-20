import { Link } from "react-router-dom";
import Container from "../../Components/Container/container";
import useProductTypes from "../../Page/ProductTypes/useProductTypes";
import useScrollToTop from "../../Hooks/useScrollToTop";
import "./productGrid.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

const customSettings = {
  desktop: {
    minWidth: 901,
    margin: "0 0 0 0",
  },
  tablet: {
    maxWidth: 900,
    minWidth: 600,
    margin: "0 0 0 0",
  },
  mobile: {
    maxWidth: 599,
    margin: "56px 0 0 0",
  },
};

const ProductGrid = () => {
  const { data, loading, error } = useProductTypes();
  const { handleScrollPosition } = useScrollToTop();

  return (
    <Container style={customSettings}>
      <div className="product_grid_wrapper">
        <div className="product_container">
          <p className="title">Our collections</p>
          <div className="item_container">
            {data &&
              data.length !== 0 &&
              data?.slice(0, 4)?.map((type) => (
                <div className="items_wrapper" key={type?.id}>
                  <Link
                    className="item_wrapper_link"
                    onClick={handleScrollPosition}
                    to={`/product-type/${type?.link}`}
                  >
                    <div className={`productItem_wrapper`}>
                      <div className="img_wrapper">
                        <img
                          className="product_img"
                          alt={type?.name}
                          src={type?.img?.[0]?.downloadURL}
                        />
                      </div>
                      <div className="text_wrapper">
                        <p className="product_name">{type?.name}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
        <div className="view_all_wrapper">
          <div className="view_all_button">
            <Link to="/product-type" onClick={handleScrollPosition}>
              View All
              <Icon icon="mdi:arrow-left-thin" />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductGrid;
