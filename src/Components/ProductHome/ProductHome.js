import { Link } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import ProductItem from "../ProductItem/ProductItem";
import "./productHome.scss";
import Container from "../Container/container";

const ProductHome = (props) => {
  const { data, isProductTypeList, title, productType, isListing } = props;

  return (
    <Container backgroundColor="black">
      <div className="header_wrapper">
        <BackButton title={title} />
        {isProductTypeList && (
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

export default ProductHome;
