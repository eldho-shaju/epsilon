"use client";
import DOMPurify from "dompurify";
import Image from "@/components/Image";
import Loader from "../Loader";
import ImageCarousel from "./ImageCarousel/imageCarousel";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import ErrorPage from "../ErrorPage";
import ContactButtons from "./ContactButtons";
import useProductDetails from "./useProductDetails";

const ProductDetail = ({ url_key }) => {
  const { item, loading, error, type, productType } = useProductDetails({
    url_key,
  });

  const url = typeof window !== "undefined" && window.location.href;

  const breadCrumbs = [
    { name: "Product Types", link: "/product-type" },
    { name: productType, link: `/product-type/${type}` },
    { name: item?.name, link: `` },
  ];

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  return (
    <section className="pb-10">
      <BreadCrumb data={breadCrumbs} />
      <div className="container mx-auto relative flex flex-col justify-center gap-8 items-center pt-breadcrumb object-contain">
        <div className="w-full pt-2 flex flex-col md:flex-row gap-8 mt-4">
          {/* Adjusted Image Container to Properly Fit */}
          <div className="w-full md:w-1/3">
            {item?.image && (
              <>
                {item?.image?.length > 1 ? (
                  <ImageCarousel name={item?.name} images={item?.image} />
                ) : (
                  <Image
                    src={item?.image?.[0]?.downloadURL}
                    alt={item?.name}
                    className="w-full object-contain"
                    width={500}
                    height={500}
                  />
                )}
              </>
            )}
          </div>

          {/* Adjusted Details Container to Properly Fit */}
          <div className="w-full md:w-2/3">
            <h3 className="text-3xl font-semibold mb-4">{item?.name}</h3>
            <p className="font-semibold text-xl mb-2 text-blue-900">
              ₹: {item?.price}
            </p>
            <ContactButtons name={item?.name} url={url} />
            {item?.description && (
              <div className="mt-5">
                <p className="font-semibold mb-2 text-lg">
                  About this product:
                </p>
                <div
                  className="prose text-justify"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(item?.description),
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
