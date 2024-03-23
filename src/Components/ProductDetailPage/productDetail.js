import useProductDetails from "./useProductDetails";
import "./detail.scss";
import Loader from "../Loader";
import Container from "../Container/container";
import ImageCarousel from "./ImageCarousel/imageCarousel";
import BackButton from "../BackButton/BackButton";
import ErrorPage from "../ErrorPage";
import { Icon } from "@iconify/react";
import useShare from "../../Hooks/useShare";
import ShareButtons from "./ShareButtons/shareButtons";

const ProductDetail = () => {
  const { data, loading, error } = useProductDetails();
  const { handleShare } = useShare();
  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  const [item] = data && data;

  const url = window.location.href;

  return (
    <Container backgroundColor="black">
      <BackButton title="Back to list" isDetailPage />
      <div className="detail_main_wrap">
        <div className="img_wrap">
          {item?.image && item?.image?.length > 1 ? (
            <ImageCarousel images={item?.image} />
          ) : (
            <img
              src={item?.image?.[0]?.downloadURL}
              alt={item?.image?.[0]?.name}
              className="product_img"
            />
          )}
        </div>

        <div className="content_wrapper">
          <h3 variant="h6" mb={2} color={"secondary"}>
            {item?.name}
          </h3>
          <p className="price">₹: {item?.price}</p>
          <div className="button_wrapper">
            <>
              <button
                className="share_btn"
                onClick={() => handleShare(item?.name)}
              >
                <Icon icon="ic:sharp-share" />
                Share
                <ShareButtons url={url} title={item?.name} />
              </button>
              <div className="enquire_btn">
                <a
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=918075516126&text=Hi, checkout the product link ${url}`}
                >
                  <Icon icon="akar-icons:whatsapp-fill" /> Enquire Now
                </a>
              </div>
            </>
          </div>
          <div className="about_product">
            <p className="about_title">About this product:</p>
            <p className="content">{item?.description}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
