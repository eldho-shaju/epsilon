import { memo, useRef } from "react";
import { Link } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import ProductItem from "../ProductItem";
import Container from "../Container/container";
import useScrollToTop from "../../Hooks/useScrollToTop";
import useDeviceTypeCheck from "../../Hooks/useDeviceTypeCheck";
import "./productHome.scss";
import { Spinner } from "react-bootstrap";
import Pagination from "./customPagination";
import CustomPagination from "./customPagination";

const customSettings = {
  backgroundColor: "black",
  color: "white",
  desktop: {
    minWidth: 901,
    margin: "64px 0 0 0",
    minHeight: "calc(100svh - 64px)",
  },
  tablet: {
    maxWidth: 900,
    minWidth: 600,
    margin: "64px 0 0 0",
    minHeight: "calc(100svh - 64px)",
  },
  mobile: {
    maxWidth: 599,
    margin: "56px 0 0 0",
    minHeight: "calc(100svh - 56px)",
  },
};

const ProductHome = memo((props) => {
  const { data = [], isProductTypes, title, productType, isListing } = props;

  const { handleScrollPosition } = useScrollToTop();
  const { isMobile } = useDeviceTypeCheck();

  return (
    <Container style={customSettings} isListing>
      <div className="product_home_container">
        <div className="product_home_wrapper">
          <div className="header_wrapper">
            {!isMobile && <BackButton title={title} />}
            {isProductTypes && (
              <p className="description">
                Explore our diverse collection of metal furniture, curated to
                suit various tastes and preferences. From sleek and modern
                designs to industrial and rustic styles, we offer a wide range
                of options to complement any interior aesthetic. Our collection
                includes:
              </p>
            )}
          </div>
          <div className={`type_grid_wrapper ${isListing ? "listing" : ""}`}>
            {data?.length > 0 &&
              data?.map((type) => (
                <div className="items_wrapper" key={type?.id}>
                  <Link
                    className="item_wrapper_link"
                    onClick={handleScrollPosition}
                    to={
                      productType
                        ? `/:${productType}/${type?.link}`
                        : type?.link
                    }
                  >
                    <ProductItem
                      name={type?.name}
                      img={type?.img?.[0]?.downloadURL}
                      price={type?.price}
                      isListing={isListing}
                    />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
});

export default ProductHome;
