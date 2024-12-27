"use client";
import Image from "@/components/Image";
import Loader from "../Loader";
import ImageCarousel from "./ImageCarousel/imageCarousel";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import ErrorPage from "../ErrorPage";
import ContactButtons from "./ContactButtons";
import useProductDetails from "./useProductDetails";
import useDeviceTypeCheck from "@/hooks/useDeviceTypeCheck";

const ProductDetail = ({ url_key }) => {
  const { data, loading, error } = useProductDetails({ url_key });
  const { isMobile } = useDeviceTypeCheck();

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  const item = data && data?.[0];
  const url = window.location.href;

  return (
    <section>
      <div className="detail_main_container">
        <div className="detail_container">
          {!isMobile && <BreadCrumb title="Back to list" isDetailPage />}
          <div className="detail_main_wrap">
            <div className="img_wrap">
              {/* {item?.image && item?.image?.length > 1 ? (
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
              )} */}
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
    </section>
  );
};

export default ProductDetail;
