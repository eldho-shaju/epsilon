import { Image } from "react-bootstrap";
import Loader from "../Loader";
import Container from "../Container/container";
import ImageCarousel from "./ImageCarousel/imageCarousel";
import BackButton from "../BackButton/BackButton";
import ErrorPage from "../ErrorPage";
import ContactButtons from "./ContactButtons";
import useProductDetails from "./useProductDetails";
import useDeviceTypeCheck from "../../hooks/useDeviceTypeCheck";
import "./detail.scss";

const customSettings = {
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

const ProductDetail = () => {
  const { data, loading, error } = useProductDetails();
  const { isMobile } = useDeviceTypeCheck();

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  const item = data && data?.[0];
  const url = window.location.href;

  return (
    <Container style={customSettings}>
      <div className="detail_main_container">
        <div className="detail_container">
          {!isMobile && <BackButton title="Back to list" isDetailPage />}
          <div className="detail_main_wrap">
            <div className="img_wrap">
              {item?.image && item?.image?.length > 1 ? (
                <ImageCarousel images={item?.image} />
              ) : (
                <Image
                  src={item?.image?.[0]?.downloadURL}
                  alt={item?.image?.[0]?.name}
                  className="product_img"
                  onError={(e) =>
                    (e.target.src = "asset/banner/placeholder.png")
                  }
                />
              )}
            </div>

            <div className="content_wrapper">
              <h3 variant="h6" mb={2} color={"secondary"}>
                {item?.name}
              </h3>
              <p className="price">₹: {item?.price}</p>
              <ContactButtons name={item?.name} url={url} />
              <div className="about_product">
                <p className="about_title">About this product:</p>
                <p className="content">{item?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
