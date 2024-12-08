"use client";
import { memo, useRef } from "react";
import BackButton from "../BackButton/BackButton";
import ProductItem from "../ProductItem";
import Container from "../Container/container";
// import "./productHome.scss";
// import { Spinner } from "react-bootstrap";
// import Pagination from "./customPagination";
// import CustomPagination from "./customPagination";
import Link from "@components/Link";
import useDeviceTypeCheck from "@hooks/useDeviceTypeCheck";
import useScrollToTop from "@hooks/useScrollToTop";

const ProductHome = memo((props) => {
  const { data = [], isProductTypes, title, productType, isListing } = props;

  const { handleScrollPosition } = useScrollToTop();
  const { isMobile } = useDeviceTypeCheck();

  return (
    <section>
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
                    href={
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
    </section>
  );
});

export default ProductHome;
