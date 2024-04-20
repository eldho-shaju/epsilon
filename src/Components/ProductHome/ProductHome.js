import { memo } from "react";
import { Link } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import ProductItem from "../ProductItem/ProductItem";
import Container from "../Container/container";
import useScrollToTop from "../../Hooks/useScrollToTop";
import useDeviceTypeCheck from "../../Hooks/useDeviceTypeCheck";
import "./productHome.scss";

const customSettings = {
  backgroundColor: "black",
  color: "white",
  desktop: {
    minWidth: 901,
    margin: "64px 0 0 0",
  },
  tablet: {
    maxWidth: 900,
    minWidth: 600,
    margin: "64px 0 0 0",
  },
  mobile: {
    maxWidth: 599,
    margin: "56px 0 0 0",
  },
};

const ProductHome = (props) => {
  const { data, isProductTypes, title, productType, isListing } = props;
  const { handleScrollPosition } = useScrollToTop();
  const { isMobile } = useDeviceTypeCheck();

  return (
    <Container style={customSettings}>
      <div className="header_wrapper">
        {!isMobile && <BackButton title={title} />}
        {isProductTypes && (
          <p className="description">
            Explore our diverse collection of metal furniture, curated to suit
            various tastes and preferences. From sleek and modern designs to
            industrial and rustic styles, we offer a wide range of options to
            complement any interior aesthetic. Our collection includes:
          </p>
        )}
      </div>
      <div className={`type_grid_wrapper ${isListing ? "listing" : ""}`}>
        {data &&
          data.length !== 0 &&
          data?.map((type) => (
            <div className="items_wrapper" key={type?.id}>
              <Link
                className="item_wrapper_link"
                onClick={handleScrollPosition}
                to={productType ? `/:${productType}/${type?.link}` : type?.link}
              >
                <ProductItem product={type} isListing={isListing} />
              </Link>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default memo(ProductHome);
