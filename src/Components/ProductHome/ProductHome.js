"use client";
import { memo } from "react";
import ProductItem from "../ProductItem";
import dynamic from "next/dynamic";

const BreadCrumb = dynamic(() => import("@/components/BreadCrumb"), {
  ssr: false,
});

const ProductHome = memo((props) => {
  const {
    data = [],
    isProductTypes,
    title,
    productType,
    isListing,
    breadCrumbs,
    subCollection,
  } = props;

  return (
    <>
      <BreadCrumb data={breadCrumbs} />
      <section className="mb-4 lg:mb-breadcrumb md:mt-breadcrumb">
        <div className="lg:container mx-auto relative flex flex-col justify-center gap-4 lg:gap-8 items-center p-mobile_margin md:pt-0">
          <div className="text-center w-full md:w-3/4">
            <p className="text-xl font-medium capitalize">{title}</p>
            {isProductTypes && (
              <p className="mt-2 md:mt-4 text-justify md:text-center text-sm md:text-md leading-mobile_line_height">
                Explore our diverse collection of metal furniture and decors,
                curated to suit various tastes and preferences. From sleek and
                modern designs to industrial and rustic styles, we offer a wide
                range of options to complement any interior aesthetic. Our
                collection includes:
              </p>
            )}
          </div>
          {data?.length > 0 && (
            <div
              className={`w-full grid gap-4 grid-cols-2 md:grid-cols-4 lg:gap-8`}
            >
              {data?.map((item, index) => (
                <ProductItem
                  item={item}
                  isListing={isListing}
                  productType={productType}
                  key={index}
                  subCollection={subCollection}
                  priority={index < 4}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
});

ProductHome.displayName = "ProductHome";

export default ProductHome;
