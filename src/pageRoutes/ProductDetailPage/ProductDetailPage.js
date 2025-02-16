"use client";
import DOMPurify from "dompurify";
import Price from "@/components/Price";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import useProductDetails from "./useProductDetails";
import ErrorUi from "@/components/ErrorUi";
import ImageCarousel from "./ImageCarousel";
import ContactButtons from "./ContactButtons";
import Image from "@/components/Image";
import LoadingAnimation from "@/components/LoadingAnimation";

const ProductDetailPage = ({ url_key }) => {
  const { item, loading, error, type, productType } = useProductDetails({
    url_key,
  });

  const url = typeof window !== "undefined" && window.location.href;

  const breadCrumbs = [
    { name: "Product Types", link: "/product-type" },
    { name: productType, link: `/product-type/${type}` },
    { name: item?.name, link: `` },
  ];

  if (loading) return <LoadingAnimation />;
  if (error) return <ErrorUi />;

  return (
    <section className="mb-mobile_margin md:mb-breadcrumb">
      <CustomBreadcrumb data={breadCrumbs} />
      <div className="mx-mobile_margin relative flex flex-col justify-center gap-8 items-center md:pt-breadcrumb object-contain">
        <div className="w-full pt-2 flex flex-col md:flex-row gap-4 md:gap-8 mt-2">
          {/* Adjusted Image Container to Properly Fit */}
          <div className="w-full md:w-1/2 lg:w-1/3 relative">
            <div className="sticky top-pdp_image">
              {item?.image && (
                <>
                  {item?.image?.length > 1 ? (
                    <ImageCarousel name={item?.name} images={item?.image} />
                  ) : (
                    <Image
                      src={item?.image?.[0]?.downloadURL}
                      alt={item?.name}
                      className="w-full object-contain"
                      width={200}
                      height={200}
                      priority
                    />
                  )}
                </>
              )}
            </div>
          </div>

          {/* Adjusted Details Container to Properly Fit */}
          <div className="w-full md:w-1/2 lg:w-2/3">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-4">
              {item?.name}
            </h1>
            <Price price={item?.price} offerPrice={item?.offerPrice} isPdp />
            <ContactButtons name={item?.name} url={url} />
            {item?.description && (
              <div className="mt-3 md:mt-6">
                <p className="font-semibold mb-2 text-lg">
                  About this product:
                </p>
                <div
                  className="prose text-justify text-sm md:text-md leading-mobile_line_height"
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

export default ProductDetailPage;
